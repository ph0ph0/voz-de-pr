import { useState } from "react";
import { savePictureWithSubjectId, getPicture } from "Utils/PictureManager";
import { API, graphqlOperation } from "aws-amplify";
import { createSubject } from "graphql/mutations";
import { getSubject } from "graphql/queries";
import {
  listSubjects,
  getSubjectsByCreatedAt,
  getSubjectsByNoOfVotes,
  getSubjectsByNoOfComments
} from "graphql-custom/queries";
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

  //NOT USED YET!!
  const downloadSubject = async id => {
    resetAll();
    window.log(`Downloading subject using id...`);

    //get subject, then get picture key and download picture

    const subjectObject = await API.graphql(
      graphqlOperation(getSubject, { id: id })
    );

    // const picture =
  };

  const getSubjectPicture = async key => {
    if (key === null) return;
    setLoading(true);
    try {
      const subjectPictureURL = await getPicture(key);
      return subjectPictureURL;
    } catch (error) {
      window.log(`Eror in useSubject getting subject picture: ${error}`);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  //Should show all subjects irrespective of whether user is signed in or not
  const listAllSubjects = async (limit = 10, nextToken = null) => {
    //Download all subjects.
    setLoading(true);
    try {
      const allSubjectData = await API.graphql({
        query: listSubjects,
        variables: {
          limit: limit,
          nextToken: nextToken
        },
        authMode: "AWS_IAM"
      });
      window.log(`****** allSubjects: ${JSON.stringify(allSubjectData)}`);

      const allSubjects = allSubjectData.data.listSubjects.items;

      return allSubjects;
    } catch (error) {
      window.log(`!!!!Error getting subjects!!: ${JSON.stringify(error)}`);
    } finally {
      setLoading(false);
    }
  };

  function myFor({ start = 5, end = 1, step = -1 } = {}) {
    // (A)
    // Use the variables `start`, `end` and `step` here
  }

  const listAllSubjectsOrderedByCreatedAt = async ({
    limit = 10,
    nextToken = null,
    sortDirection = "DESC",
    filter = null
  } = {}) => {
    setLoading(true);
    try {
      window.log(`FILTER passed to useSubject: ${JSON.stringify(filter)}`);
      window.log(`nextToken passed to useSubject: ${nextToken}`);
      if (
        Object.entries(filter).length === 0 &&
        filter.constructor === Object
      ) {
        window.log(`Filter was empty, nulling`);
        filter = null;
      }
      window.log(`Filter after nulling: ${JSON.stringify(filter)}`);
      const allSubjectData = await API.graphql({
        query: getSubjectsByCreatedAt,
        variables: {
          staticKey: 1,
          limit: limit,
          nextToken: nextToken,
          sortDirection: sortDirection,
          filter: filter
        },
        authMode: "AWS_IAM"
      });
      window.log(
        `****** allSubjects ordered by createdAt: ${JSON.stringify(
          allSubjectData.data.getSubjectsByCreatedAt.items
        )}`
      );

      const allSubjects = allSubjectData.data.getSubjectsByCreatedAt.items;
      const token = allSubjectData.data.getSubjectsByCreatedAt.nextToken;
      // window.log(`****Next token extracted from data: ${token}`);

      return { subjects: allSubjects, nextToken: token };
    } catch (error) {
      window.log(
        `Error getting subjects orderd by createdAt: ${JSON.stringify(error)}`
      );
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const listAllSubjectsOrderedByVotes = async ({
    limit = 10,
    nextToken = null,
    sortDirection = "DESC",
    filter = null
  } = {}) => {
    setLoading(true);
    try {
      const allSubjectData = await API.graphql({
        query: getSubjectsByNoOfVotes,
        variables: {
          staticKey: 1,
          limit: limit,
          nextToken: nextToken,
          sortDirection: sortDirection,
          filter: filter
        },
        authMode: "AWS_IAM"
      });
      window
        .log
        // `****** allSubjects ordered by votes: ${JSON.stringify(allSubjectData)}`
        ();

      const allSubjects = allSubjectData.data.getSubjectsByNoOfVotes.items;
      const token = allSubjectData.data.getSubjectsByNoOfVotes.nextToken;
      window.log(`********************Next token: ${token}`);

      return { subjects: allSubjects, nextToken: token };
    } catch (error) {
      window.log(
        `Error getting subjects orderd by votes: ${JSON.stringify(error)}`
      );
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const listAllSubjectsOrderedByComments = async ({
    limit = 10,
    nextToken = null,
    sortDirection = "DESC",
    filter = null
  } = {}) => {
    setLoading(true);
    try {
      const allSubjectData = await API.graphql({
        query: getSubjectsByNoOfComments,
        variables: {
          staticKey: 1,
          limit: limit,
          nextToken: nextToken,
          sortDirection: sortDirection,
          filter: filter
        },
        authMode: "AWS_IAM"
      });
      window.log(
        `****** allSubjects ordered by votes: ${JSON.stringify(allSubjectData)}`
      );

      const allSubjects = allSubjectData.data.getSubjectsByNoOfComments.items;
      const token = allSubjectData.data.getSubjectsByNoOfComments.nextToken;
      window.log(`********************Next token: ${token}`);

      return { subjects: allSubjects, nextToken: token };
    } catch (error) {
      window.log(
        `Error getting subjects orderd by comments: ${JSON.stringify(error)}`
      );
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    error,
    loading,
    saveSubject,
    downloadSubject,
    listAllSubjects,
    getSubjectPicture,
    listAllSubjectsOrderedByCreatedAt,
    listAllSubjectsOrderedByVotes,
    listAllSubjectsOrderedByComments
  };
};

// export default useSubject;
