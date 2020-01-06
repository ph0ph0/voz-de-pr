import { useState } from "react";
import { savePictureWithSubjectId } from "Utils/PictureManager";
import { API, graphqlOperation } from "aws-amplify";
import { createSubject } from "graphql/mutations";

const useSubject = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError ] =

  const saveSubject = async (subject, image) => {
      setLoading(true)
    //Create subjectId so we can bind it to the picture if there is one
    const subjectId = uuidv4();
    subject.id = subjectId;

    try {
      //Check if subject has image, this can save time if we skip image upload
      if (image) {
        await savePictureWithSubjectId(image, subjectId);
      }

      window.log("saving subject...");
      const subjectObject = await API.graphql(
        graphqlOperation(createSubject, { input: subject })
      );
      window.log(`subject saved: ${JSON.stringify(subjectObject)}`);
        
      return subjectObject;

    } catch (error) {
      window.log(`Error in saveSubject of useSubject: ${error}`);
      setError(error)
      throw error;
    } finally {
        setLoading(false)
    }
  };

  return {
      error,
      loading,
      saveSubject
  }
};
