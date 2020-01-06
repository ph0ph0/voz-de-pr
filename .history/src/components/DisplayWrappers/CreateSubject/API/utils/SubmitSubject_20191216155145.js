import { createSubject, createPicture } from "graphql/mutations";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { savePicture } from "Utils/PictureManager";
import { saveSubject } from "Utils/SubjectManager";

const submitSubject = async (subject, image) => {
  try {
    //SKIP IF IMAGE IS NIL!

    if (image) {
      await savePicture(image);
    }

    const subjectObject = await API.graphql(
      graphqlOperation(createSubject, { input: subject })
    );

    // //UPDATE USER OBJECT!
  } catch (error) {
    window.log(`Error creating subject!: ${JSON.stringify(error)}`);
    throw error;
  }
};

export default submitSubject;
