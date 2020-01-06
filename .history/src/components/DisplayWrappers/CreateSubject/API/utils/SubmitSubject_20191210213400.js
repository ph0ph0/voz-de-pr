import { createSubject, createPicture } from "graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";

const submitSubject = async subject => {
  const fileObject = {
    bucket: "TEST_BUCKET",
    region: "TEST_REGION",
    key: "TEST_KEY"
  };

  const pictureObject = {
    owner: "TEST_USER",
    description: "TEST_DESCRIPTION",
    file: fileObject
  };

  try {
    subject["pictures"] = await API.graphql(
      graphqlOperation(createPicture, { input: pictureObject })
    );

    window.log(`Attempting to submit...`);
    const subjectObject = await API.graphql(
      graphqlOperation(createSubject, { input: subject })
    );
    window.log(
      `Successfully created subject: ${JSON.stringify(subjectObject)}`
    );
    //UPDATE USER OBJECT!
  } catch (error) {
    window.log(`Error creating subject!: ${JSON.stringify(error)}`);
    throw error;
  }
};

export default submitSubject;
