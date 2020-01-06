import { useState } from "react";
import { savePictureWithSubjectId } from "Utils/PictureManager";
import { API, graphqlOperation } from "aws-amplify";
import { createSubject } from "graphql/mutations";

const useSubject = () => {
  const [loading, setLoading] = useState(false);

  const saveSubject = async (subject, image) => {
    //Create subjectId so we can bind it to the picture if there is one
    const subjectId = uuidv4();
    subject.id = subjectId;

    try {
      //Check if subject has image, this can save time if we skip image upload
      if (image) {
        await savePictureWithSubjectId(image, subjectId);
      }
    } catch (error) {
      window.log(`Error in saveSubject of useSubejct: ${error}`);
      throw error;
    }

    try {
      if (image) {
        subject.hasPictures = true;
        await savePictureWithSubjectId(image, subjectId);
      } else {
        subject.hasPictures = false;
      }

      subject.id = subjectId;

      await saveSubject(subject);

      // //UPDATE USER OBJECT!
    } catch (error) {
      window.log(`Error creating subject!: ${error}`);
      throw error;
    }
  };
};
