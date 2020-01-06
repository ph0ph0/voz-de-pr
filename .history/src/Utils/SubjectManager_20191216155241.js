import { API, graphqlOperation, Storage } from "aws-amplify";
import { createSubject } from "graphql/mutations";

export const saveSubject = async subject => {
  try {
    const subjectObject = await API.graphql(
      graphqlOperation(createSubject, { input: subject })
    );

    return subjectObject;
  } catch (error) {
    throw error;
  }
};
