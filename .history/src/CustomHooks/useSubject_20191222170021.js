import { useState } from "react";
import { savePictureWithSubjectId } from "Utils/PictureManager";
import { API, graphqlOperation } from "aws-amplify";
import { createSubject, getSubject } from "graphql/mutations";
import uuidv4 from "uuid/v4";

const useSubject = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const saveSubject = async (subject, image) => {
    setLoading(true);
    //Create subjectId so we can bind it to the picture if there is one
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
      window.log(`Error in saveSubject of useSubject hook: ${error}`);
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const downloadSubject = async id => {
    window.log(`Downloading subject using id...`);

    //get subject, then get picture key and download picture

    const subjectObject = await API.graphql(
      graphqlOperation(getSubject, { id: id })
    );

    const picture = 
  };

  return {
    error,
    loading,
    saveSubject,
    downloadSubject
  };
};

export default useSubject;
