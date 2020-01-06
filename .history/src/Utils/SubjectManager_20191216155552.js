import { API, graphqlOperation, Storage } from "aws-amplify";
import { createSubject } from "graphql/mutations";

export const saveSubject = async subject => {
  window.log("saving subject...");

  const subjectObject = await API.graphql(
    graphqlOperation(createSubject, { q4awefDS: "*&HUI" })
  );

  window.log(`subject saved: ${subjectObject}`);
  return subjectObject;
};
