import { createSubject, createPicture } from "graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";

import { useUser } from "CustomHooks/user";

const submitSubject = async subject => {
  try {
    const subjectObject = await API.graphql(
      graphqlOperation(createSubject, { input: subject })
    );
    window.log(`Successfully created subject: ${subject}`);
    //UPDATE USER OBJECT!
  } catch (error) {
    window.log(`Error creating subject!: ${error}`);
    throw error;
  }
};

export default submitSubject;
