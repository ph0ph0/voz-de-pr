import { useState } from "react";
import { savePictureWithSubjectId } from "Utils/PictureManager";
import { API, graphqlOperation } from "aws-amplify";
import { createSubject } from "graphql/mutations";
import { getSubject } from "graphql/queries";
import uuidv4 from "uuid/v4";

export const useSubject = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const resetAll = () => {
    setLoading(false);
    setError(null);
  };

  const saveSubject = async (subject, image) => {
    resetAll();
    setLoading(true);
    //Create subjectId so we can assign to subject and bind it to the picture if there is one
    const subjectId = uuidv4();
    subject.id = subjectId;

    try {
      //Check if subject has image, this can save time if we skip image upload. If it does, save to S3 and dDB
      if (image) {
        await savePictureWithSubjectId(image, subjectId);
      }

      //Save subject object to dDB
      window.log("saving subject...");
      const subjectObject = await API.graphql(
        graphqlOperation(createSubject, { input: subject })
      );
      window.log(`subject saved: ${JSON.stringify(subjectObject)}`);

      return subjectObject;
    } catch (error) {
      window.log(
        `Error in saveSubject of useSubject hook: ${JSON.stringify(error)}`
      );
      if (!error.message) {
        error.message = "Error saving, please try again!";
      }
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  //Not used yet?
  const downloadSubject = async id => {
    resetAll();
    window.log(`Downloading subject using id...`);

    //get subject, then get picture key and download picture

    const subjectObject = await API.graphql(
      graphqlOperation(getSubject, { id: id })
    );

    // const picture =
  };

  return {
    error,
    loading,
    saveSubject,
    downloadSubject
  };
};

// export default useSubject;
