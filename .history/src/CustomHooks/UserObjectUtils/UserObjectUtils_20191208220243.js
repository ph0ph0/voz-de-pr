import { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { getUser } from "graphql/queries";
import { createUser } from "graphql/mutations";
import { catchClause } from "@babel/types";

export const getUserObject = async id => {
  try {
    const user = await API.graphql(graphqlOperation(getUser, { id: id }));
    return user;
  } catch (error) {
    window.log(`Error getting User Object: ${error.message}`);
    throw error;
  }
};

export const updateUserObject = async () => {};
