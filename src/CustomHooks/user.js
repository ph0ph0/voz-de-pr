import React, { useState, useEffect, useMemo, useContext } from "react";
import { Auth } from "aws-amplify";
import awsMobile from "../aws-exports";
import {
  getUserObject,
  updateUserObject
} from "./UserObjectUtils/UserObjectUtils";
import {
  createUserProfilePic,
  getPicture,
  nullPictureKey
} from "Utils/PictureManager";

//Create context to hold values that we will expose to our components.
// Don't worry about null, as it will be populated instantly by the component below

export const UserContext = React.createContext(null);

//Create a controller component that will calculate data that we need to give to
//children components via UserContext.Provider. This is where amplify is mapped to
//a different interface.
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //Configure the keys needed for the Auth module
    Auth.configure(awsMobile);

    //Attempt to fetch the current user and set it
    (async function getAndSetUser() {
      try {
        const cognitoUser = await Auth.currentAuthenticatedUser();
        const userId = cognitoUser.username;
        const userObject = await getUserObject(userId);
        window.log(
          `User is already logged in and got userObject: ${JSON.stringify(
            userObject
          )}`
        );
        setUser(userObject);
      } catch (error) {
        window.log(`Error getting current user!: ${JSON.stringify(error)}`);
        setUser(null);
      }
    })();
  }, []);

  const refreshUser = async () => {
    window.log("refreshing user...");
    try {
      const cognitoUser = await Auth.currentAuthenticatedUser();
      const userId = cognitoUser.username;
      const userObject = await getUserObject(userId);
      window.log("Got user after refresh");
      setUser(userObject);
    } catch (error) {
      window.log(`Error refreshing user: ${error}`);
      setUser(null);
    }
  };

  //Remember to update the current logged in user!
  const signUp = async (
    email,
    password,
    username,
    firstName,
    lastName,
    avatar,
    location
  ) => {
    window.log(`Signing up...`);
    setError(null);
    setLoading(true);
    try {
      if (avatar.size > 2097152) {
        window.log("Profile image is too large");
        throw new Error(
          "Profile image is too large, please select an image smaller than 2 MB"
        );
      }
      window.log(`Location: ${location}`);
      const cognitoUser = await Auth.signUp({
        username: email,
        password: password,
        validationData: [
          {
            Name: "username",
            Value: username
          },
          {
            Name: "firstName",
            Value: firstName
          },
          {
            Name: "lastName",
            Value: lastName
          },
          {
            Name: "locationValue",
            Value: location
          }
        ]
      });
      window.log(`Signed Up! User: ${JSON.stringify(cognitoUser)}`);
    } catch (error) {
      window.log(`Error signing up in user.js: ${JSON.stringify(error)}`);
      if (error.code === "InvalidParameterException") {
        error.message =
          "Please ensure that your password has more than 6 characters";
      } else if (
        error.code === "UserLambdaValidationException" &&
        error.message == "PreSignUp failed with error Username already exists!."
      ) {
        error.message = "Username already exists";
      } else if (
        error.code === "InternalErrorException" ||
        error.code === "InvalidLambdaResponseException" ||
        error.code === "InvalidParameterException" ||
        error.code === "UnexpectedLambdaException" ||
        error.code === "UserLambdaValidationException"
      ) {
        error.message = "An internal error occured, please try again later";
      }
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const confirmSignUp = async (email, password, confirmationCode, avatar) => {
    window.log(`Confirming sign up...`);
    setError(null);
    setLoading(true);
    window.log(`confirmation code in user hook: ${confirmationCode}`);
    try {
      await Auth.confirmSignUp(email, confirmationCode);
      window.log(`User confirmed! Attempting sign in...`);
    } catch (error) {
      window.log(`Failed to confirm signup!: ${JSON.stringify(error)}`);
      if (error.code === "AliasExistsException") {
        error.message = "This account has already been confirmed";
      } else if (
        error.code === "InternalErrorException" ||
        error.code === "InvalidLambdaResponseException" ||
        error.code === "InvalidParameterException" ||
        error.code === "UnexpectedLambdaException" ||
        error.code === "UserLambdaValidationException"
      ) {
        error.message = "An internal error occured, please try again later";
      }
      setError(error);
      //Only set loading to false if we  fail to confirm the user
      setLoading(false);
      throw error;
    }

    try {
      const cognitoUser = await Auth.signIn(email, password);
      window.log("Logged user in");
      const userId = cognitoUser.username;
      const userObjectData = await getUserObject(userId);
      window.log(
        `Logged in and got userObject: ${JSON.stringify(userObjectData)}`
      );

      window.log("Now saving profile picture");
      await createUserProfilePic(avatar, userId);
      setUser(userObjectData);
    } catch (error) {
      window.log(
        `Error signing user in after confirming signUp!: ${JSON.stringify(
          error
        )}`
      );
      if (
        error.code === "InternalErrorException" ||
        error.code === "InvalidLambdaResponseException" ||
        error.code === "InvalidParameterException" ||
        error.code === "UnexpectedLambdaException" ||
        error.code === "UserLambdaValidationException"
      ) {
        error.message = "An internal error occured, please try again later";
      }
      setError(error);
      throw error;
    } finally {
      // setSuccess(false);
      setLoading(false);
    }
  };

  //Handle the user update here, but return the resolve value so that we can chain .then statements.
  //Additionally, we catch the error and enhance it with extra info
  const login = async (email, password) => {
    window.log("Logging in...");
    setError(null);
    setLoading(true);
    await Auth.signOut();
    try {
      const cognitoUser = await Auth.signIn(email, password);
      window.log("Logged user in");
      const userId = cognitoUser.username;
      const userObjectData = await getUserObject(userId);
      window.log(
        `Logged in and got userObject: ${JSON.stringify(userObjectData)}`
      );
      setUser(userObjectData);
    } catch (error) {
      window.log(`Error logging in or getting user object: ${error.message}`);
      if (user) {
        window.log(`Logging user out after failed sign in`);
        await Auth.signOut()
          .then(() => {
            setUser(null);
          })
          .catch(error => {
            window.log(`Error signing out after error logging in ${error}`);
          });
      }
      if (error.code === "UserNotFoundException") {
        error.message = "Invalid username or password";
      } else if (
        error.code === "InternalErrorException" ||
        error.code === "InvalidLambdaResponseException" ||
        error.code === "InvalidParameterException" ||
        error.code === "UnexpectedLambdaException" ||
        error.code === "UserLambdaValidationException"
      ) {
        error.message = "An internal error occured, please try again later";
      }
      setLoading(false);
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    window.log(`Logging out`);
    setError(null);
    setLoading(true);

    await Auth.signOut().then(data => {
      setUser(null);
      window.log(`Logged out`);
      setLoading(false);
      return data;
    });
  };

  const forgotPassword = async email => {
    setError(null);
    setLoading(true);
    await Auth.forgotPassword(email)
      .then(data => {
        setLoading(false);
        window.log(`Forgot password data: ${JSON.stringify(data)}`);
        return data;
      })
      .catch(error => {
        setLoading(false);
        window.log(
          `Error implementing forgot pw flow: ${JSON.stringify(error)}`
        );
        if (error.code === "UserNotFoundException") {
          error.message = "User not found, please try a different email";
        } else if (
          error.code === "InternalErrorException" ||
          error.code === "InvalidLambdaResponseException" ||
          error.code === "InvalidParameterException" ||
          error.code === "UnexpectedLambdaException" ||
          error.code === "UserLambdaValidationException"
        ) {
          error.message = "An internal error occured, please try again later";
        }
        setError(error);
        throw error;
      });
  };

  const submitCodeAndNewPassword = async (email, code, password) => {
    setError(null);
    setLoading(true);
    await Auth.forgotPasswordSubmit(email, code, password)
      .then(data => {
        setLoading(false);
        window.log(`Submitted code, data: ${JSON.stringify(data)}`);
        return data;
      })
      .catch(error => {
        setLoading(false);
        window.log(
          `Error submitting code and new password: ${JSON.stringify(error)}`
        );
        setError(error);
        throw error;
      });
  };

  const updateUserLocationAndAvatar = async (data, avatar) => {
    setLoading(true);

    const userId = user.id;
    window.log(`userId in updateUser of user.js: ${userId}`);
    //Set data.id so that dDB knows which User object to update
    data.id = userId;

    try {
      //Set avatar property to null so that it gets refreshed in the app (see ProfileImageWrapper component in NavBar)
      if (avatar) {
        window.log("Avatar was submitted, nulling avatar avatar key...");
        await nullPictureKey(userId);
        window.log("Avatar key nulled, saving userProfilePic to S3...");
        await createUserProfilePic(avatar, userId);
        window.log("Saved new avatar to S3!");
      }

      const updatedUser = await updateUserObject(data);
      setUser(updatedUser);
    } catch (error) {
      window.log(`Error updating user object!: ${JSON.stringify(error)}`);
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const getUserAvatar = async avatarKey => {
    setLoading(true);
    try {
      const avatar = await getPicture(avatarKey);
      return avatar;
    } catch (error) {
      window.log(`Failed to get user avatar: ${error}`);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  //Make sure not to force a re-render of components that are reading these values,
  // unless the user, error, or loading values have changed. This is for optimisation purposes.
  const values = useMemo(
    () => ({
      user,
      refreshUser,
      error,
      loading,
      login,
      logout,
      signUp,
      confirmSignUp,
      forgotPassword,
      submitCodeAndNewPassword,
      updateUserLocationAndAvatar,
      getUserAvatar
    }),
    [user, error, loading]
  );

  //Finally, return the interface that we want to expose to our other components
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error(
      "useUser hook must be used within a UserProvider component"
    );
  }

  return context;
};
