import React, { useState, useEffect, useMemo } from "react";
import { Auth } from "aws-amplify";

//Create context to hold values that we will expose to our components.
// Don't worry about null, as it will be populated instantly by the component below

export const UserContext = React.createContext(null);

//Create a controller component that will calculate data that we need to give to
//children components via UserContext.Provider. This is where amplify is mapped to
//a different interface.

export const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

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

    //Handle the user update here, but return the resolve value so that we can chain .then statements.
    //Additionally, we catch the error and enhance it with extra info

    const login = (email, password) => {
      window.log(`Logging in...`);
      Auth.signIn(email, password)
        .then(cognitoUser => {
          window.log(`Logged In!`);
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

    //Make sure not to force a re-render of components that are reading these values,
    // unless the user value has changed. This is for optimisation purposes.
    const values = useMemo(() => ({ user, login, logout }), [user]);

    //Finally, return the interface that we want to expose to our other components
    return (
      <UserContext.Provider value={values}>{children}</UserContext.Provider>
    );
  });
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    // Configure the keys needed for the Auth module. Essentially this is
    // like calling `Amplify.configure` but only for `Auth`.
    Auth.configure({
      // ...
    });

    // attempt to fetch the info of the user that was already logged in
    Auth.currentAuthenticatedUser()
      .then(user => setUser(user))
      .catch(() => setUser(null));
  }, []);

  // We make sure to handle the user update here, but return the resolve value in order for our components to be
  // able to chain additional `.then()` logic. Additionally, we `.catch` the error and "enhance it" by providing
  // a message that our React components can use.
  const login = (usernameOrEmail, password) =>
    Auth.signIn(usernameOrEmail, password)
      .then(cognitoUser => {
        setUser(cognitoUser);
        return cognitoUser;
      })
      .catch(err => {
        if (err.code === "UserNotFoundException") {
          err.message = "Invalid username or password";
        }

        // ... (other checks)

        throw err;
      });

  // same thing here
  const logout = () =>
    Auth.signOut().then(data => {
      setUser(null);
      return data;
    });

  // Make sure to not force a re-render on the components that are reading these values,
  // unless the `user` value has changed. This is an optimisation that is mostly needed in cases
  // where the parent of the current component re-renders and thus the current component is forced
  // to re-render as well. If it does, we want to make sure to give the `UserContext.Provider` the
  // same value as long as the user data is the same. If you have multiple other "controller"
  // components or Providers above this component, then this will be a performance booster.
  const values = React.useMemo(() => ({ user, login, logout }), [user]);

  // Finally, return the interface that we want to expose to our other components
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

// We also create a simple custom hook to read these values from. We want our React components
// to know as little as possible on how everything is handled, so we are not only abtracting them from
// the fact that we are using React's context, but we also skip some imports.
export const useUser = () => {
  const context = React.useContext(UserContext);

  if (context === undefined) {
    throw new Error(
      "`useUser` hook must be used within a `UserProvider` component"
    );
  }
  return context;
};
