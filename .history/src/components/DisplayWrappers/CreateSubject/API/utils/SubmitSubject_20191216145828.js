import { createSubject, createPicture } from "graphql/mutations";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { KeyGen } from "Utils/RandomKeyGen";

const submitSubject = async (subject, image) => {
  const key = KeyGen();
  const extension = image.name.split(".")[1];

  try {
    //SKIP IF IMAGE IS NIL!
    window.log(`Sending image to storage`);
    const s3Output = await Storage.put(`${key}.${extension}`, image);
    const fileKey = s3Output.key;

    const fileObject = {
      bucket: "vozdeprsubjectimagesstorages3service",
      region: "us-east-1",
      key: fileKey
    };

    const picture = {
      // owner: "TEST_USER",
      description: subject.imageDescription,
      file: fileObject
    };

    const pictureObject = await API.graphql(
      graphqlOperation(createPicture, { input: picture })
    );

    window.log(`pictureObject uploaded: ${JSON.stringify(pictureObject)}`);

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
