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

  //Handle the user update here, but return the resolve value so that we can chain .then statements.
  //Additionally, we catch the error and enhance it with extra info
  const login = (email, password) => {
    window.log("Logging in...");
    setError(null);
    setLoading(true);
    Auth.signIn(email, password)
      .then(cognitoUser => {
        window.log("Logged In!");
        setLoading(false);
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

  const forgotPassword = email => {
    setError(null);
    setLoading(true);
    Auth.forgotPassword(email)
      .then(data => {
        window.log(`Forgot password data: ${data}`);
        return data;
      })
      .catch(error => {
        window.log(
          `Error implementing forgot pw flow: ${JSON.stringify(error)}`
        );
      });
  };

  //Make sure not to force a re-render of components that are reading these values,
  // unless the user value has changed. This is for optimisation purposes.
  const values = useMemo(() => ({ user, error, loading, login, logout }), [
    user,
    error,
    loading
  ]);

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
