import { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { getUser } from "graphql/queries";

export const useUpdateUserObject = () => {
  const getUserObject = async id => {
    let user = null;
    try {
      user = await API.graphql(graphqlOperation(getUser, { id: id }));
    } catch (error) {
      throw error;
    }
  };
};
