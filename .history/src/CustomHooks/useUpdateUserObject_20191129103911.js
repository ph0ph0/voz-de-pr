import { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { getUser } from "graphql/queries";
import { createUser } from "graphql/mutations";

export const getUserObject = async id => {
  let user = null;
  try {
    user = await API.graphql(graphqlOperation(getUser, { id: id }));
  } catch (error) {
    window.log(`Error getting User Object: ${error.message}`);
    throw error;
  }
};

export const createUserObject = () => {
  con;
};
