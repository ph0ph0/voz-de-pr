import { createSubject, createPicture } from "graphql/mutations";
import { API, graphqlOperation, Storage } from "aws-amplify";

const submitSubject = async (subject, image) => {
  const key = KeyGen();
  const extension = image.name.split(".")[1];

  try {
    //SKIP IF IMAGE IS NIL!

    const subjectObject = await API.graphql(
      graphqlOperation(createSubject, { input: subject })
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
