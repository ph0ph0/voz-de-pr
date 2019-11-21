import React, { useState, useEffect, useMemo, useContext } from "react";
import { Auth } from "aws-amplify";

//Create context to hold values that we will expose to our components.
// Don't worry about null, as it will be populated instantly by the component below

export const UserContext = React.createContext(null);

//Create a controller component that will calculate data that we need to give to
//children components via UserContext.Provider. This is where amplify is mapped to
//a different interface.

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    //Configure the keys needed for the Auth module
    // Auth.configure({

    // })

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
    Auth.signIn(email, password)
      .then(cognitoUser => {
        window.log("Logged In!");
        setUser(cognitoUser);
        return cognitoUser;
      })
      .catch(error => {
        window.log(`Error Logging In!: ${JSON.stringify(error)}`);
        if (error.code === "UserNotFoundException") {
          error.message = "Invalid username or password";
        }
        //Other checks
        throw error;
      });
  };

  const logout = () => {
    Auth.signOut().then(data => {
      setUser(null);
      return data;
    });
  };

  const currentUser = async () => {
    Auth.currentAuthenticatedUser()
      .then(user => {
        return user;
      })
      .catch(error => {
        window.log(`Error getting current user x: ${JSON.stringify(error)}`);
        throw error;
      });
  };

  //Make sure not to force a re-render of components that are reading these values,
  // unless the user value has changed. This is for optimisation purposes.
  const values = useMemo(() => ({ user, login, logout, currentUser }), [user]);

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
