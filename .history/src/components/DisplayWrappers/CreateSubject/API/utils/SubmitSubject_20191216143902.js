import { createSubject, createPicture } from "graphql/mutations";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { KeyGen } from "Utils/RandomKeyGen";

const submitSubject = async (subject, image) => {
  const fileObject = {
    bucket: "TEST_BUCKET",
    region: "TEST_REGION",
    key: "TEST_KEY"
  };

  const pictureObject = {
    // owner: "TEST_USER",
    description: "TEST_DESCRIPTION",
    file: fileObject
  };

  const key = KeyGen();
  const extension = image.name.split(".")[1];

  try {
    //SKIP IF IMAGE IS NIL!
    window.log(`Sending image to storage`);
    const file = await Storage.put(`${key}.${extension}`, image);

    window.log(`Upload complete, key?: ${JSON.stringify(file)}`);
    // // subject["pictures"] = await API.graphql(
    // //   graphqlOperation(createPicture, { input: pictureObject })
    // // );

    // window.log(`Attempting to submit...`);

    // const picture = await API.graphql(
    //   graphqlOperation(createPicture, { input: pictureObject })
    // );

    // // const subjectObject = await API.graphql(
    // //   graphqlOperation(createSubject, { input: subject })
    // // );
    // window.log(`Successfully created subject: ${JSON.stringify(picture)}`);
    // //UPDATE USER OBJECT!
  } catch (error) {
    window.log(`Error creating subject!: ${JSON.stringify(error)}`);
    throw error;
  }
};

export default submitSubject;
