import React, { useState, useEffect, useMemo, useContext } from "react";
import { Auth } from "aws-amplify";
import awsMobile from "../aws-exports";

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
  const [success, setSuccess] = useState(false);
  //success is used in login, signUp and confirmSignUp to initiate naving away from the form when successful

  useEffect(() => {
    //Configure the keys needed for the Auth module
    Auth.configure(awsMobile);

    //Attempt to fetch the current user and set it
    Auth.currentAuthenticatedUser()
      .then(user => setUser(user))
      .catch(() => {
        window.log(`Failed to get current authenticated user`);
        setUser(null);
      });
  }, []);

  //Remember to update the current logged in user!
  const signUp = async (email, password) => {
    window.log(`Signing up...`);
    setError(null);
    setLoading(true);

    try {
      // const newUser = await Auth.signUp(email, password);
      // window.log(`Signed Up! User: ${JSON.stringify(newUser)}`);
      // setUser(newUser); //Remember to create User object in database!
      // setSuccess(true);
    } catch {
      window.log(`Error signing up!: ${JSON.stringify(error)}`);
      setError(error);
      throw error;
    } finally {
      setSuccess(false);
      setLoading(true);
    }
  };

  const confirmSignUp = async (email, password, confirmationCode) => {
    window.log(`Confirming sign up...`);
    setError(null);
    setLoading(true);

    try {
      await Auth.confirmSignUp(email, confirmationCode);
      window.log(`User confirmed! Attempting sign in...`);
    } catch (error) {
      window.log(`Failed to confirm signup!: ${JSON.stringify(error)}`);
      setError(error);
      //Only set loading to false if we  fail to confirm the user
      setLoading(false);
      throw error;
    }

    try {
      const user = await Auth.signIn(email, password);
      window.log(`User confirmed AND signed in!`);
      setUser(user);
      setSuccess(true);
    } catch (error) {
      window.log(
        `Error signing user in after confirming signUp!: ${JSON.stringify(
          error
        )}`
      );
      setError(error);
      throw error;
    } finally {
      setSuccess(false);
      setLoading(false);
    }
  };

  //Handle the user update here, but return the resolve value so that we can chain .then statements.
  //Additionally, we catch the error and enhance it with extra info
  const login = (email, password) => {
    window.log("Logging in...");
    setError(null);
    setLoading(true);
    Auth.signIn(email, password)
      .then(cognitoUser => {
        window.log("Logged In!");
        setLoading(false); //May want to retrieve our custom user object from our server!
        setUser(cognitoUser);
        return cognitoUser;
      })
      .catch(error => {
        window.log(`Error Logging In!: ${JSON.stringify(error)}`);
        if (error.code === "UserNotFoundException") {
          error.message = "Invalid username or password";
        }
        //Other checks
        setLoading(false);
        setError(error);
        throw error;
      });
  };

  const logout = () => {
    window.log(`Logging out`);
    setError(null);
    setLoading(true);

    Auth.signOut().then(data => {
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

  //Make sure not to force a re-render of components that are reading these values,
  // unless the user value has changed. This is for optimisation purposes.
  const values = useMemo(
    () => ({
      user,
      error,
      loading,
      success,
      login,
      logout,
      signUp,
      confirmSignUp,
      forgotPassword,
      submitCodeAndNewPassword
    }),
    [user, error, loading, success]
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