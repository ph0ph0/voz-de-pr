import React, { useState, useEffect } from "react";
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
  });
};
