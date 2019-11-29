import { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { getUser } from "graphql/queries";
import { createUser } from "graphql/mutations";
import { catchClause } from "@babel/types";

export const getUserObject = async id => {
  let user = null;
  try {
    const user = await API.graphql(graphqlOperation(getUser, { id: id }));
    return user
  } catch (error) {
    window.log(`Error getting User Object: ${error.message}`);
    throw error;
  }
};

export const createUserObject = (userObject) => {
    //Do some checks that the userObject contains everything that is required
    try {
        const user = await API.graphql(graphqlOperation(createUser, {input: userObject}))
        return user
    } catch(error) {
        window.log(`Error creating User Object: ${error}`)
        throw error
    }

};
