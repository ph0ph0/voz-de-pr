import { API, graphqlOperation, Storage } from "aws-amplify";
import { createSubject } from "graphql/mutations";

export const CreateSubject = async subject => {
  const subjectObject = await API.graphql(
    graphqlOperation(createSubject, { input: subject })
  );
};
