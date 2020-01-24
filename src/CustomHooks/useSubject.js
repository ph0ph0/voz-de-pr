import { useState } from "react";
import { savePictureWithSubjectId, getPicture } from "Utils/PictureManager";
import { API, graphqlOperation } from "aws-amplify";
import { createSubject, voteOnSubject } from "graphql/mutations";
import {
  listSubjects,
  getSubject,
  getSubjectsByCreatedAt,
  getSubjectsByNoOfVotes,
  getSubjectsByNoOfComments
} from "graphql-custom/queries";

import { filterStripper } from "./UseSubjectUtils/FilterStripper";

import uuidv4 from "uuid/v4";

export const useSubject = () => {
  const [loading, setLoading] = useState(false);
  const [voteLoading, setVoteLoading] = useState(false);
  const [error, setError] = useState(null);

  const resetAll = () => {
    window.log("Resetting loading and error in useSubject");
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

  const downloadSubject = async id => {
    // resetAll();
    window.log(`Downloading subject using id...`);

    //get subject, then get picture key and download picture
    setLoading(true);
    try {
      const subjectObject = await API.graphql({
        query: getSubject,
        variables: {
          id: id
        },
        authMode: "AWS_IAM"
      });

      window.log(`Got Subject object: ${subjectObject}`);

      return subjectObject;
    } catch (error) {
      window.log(`Error downloading subject: ${JSON.stringify(error)}`);
      setError(
        "Error downloading the subject, it either doesn't exist or was recently deleted"
      );
      throw error;
    } finally {
      setLoading(false);
    }
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
      //null the search filter and remove null values, as it can't have an empty string value
      let strippedFilter = filterStripper(filter);

      const allSubjectData = await API.graphql({
        query: getSubjectsByCreatedAt,
        variables: {
          staticKey: 1,
          limit: limit,
          nextToken: nextToken,
          sortDirection: sortDirection,
          filter: strippedFilter
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
      window.log(`****Next token extracted from data: ${!!token}`);
      // window.log(`ERRYTING: ${JSON.stringify(allSubjectData)}`);

      return { subjects: allSubjects, nextToken: token };
    } catch (error) {
      window.log(
        `Error getting subjects orderd by createdAt: ${JSON.stringify(error)}`
      );
      window.log(`Other error: ${error}`);
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
    //null the search filter and remove null values, as it can't have an empty string value
    const strippedFilter = filterStripper(filter);
    try {
      const allSubjectData = await API.graphql({
        query: getSubjectsByNoOfVotes,
        variables: {
          staticKey: 1,
          limit: limit,
          nextToken: nextToken,
          sortDirection: sortDirection,
          filter: strippedFilter
        },
        authMode: "AWS_IAM"
      });

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
    //null the search filter and remove null values, as it can't have an empty string value
    const strippedFilter = filterStripper(filter);
    try {
      const allSubjectData = await API.graphql({
        query: getSubjectsByNoOfComments,
        variables: {
          staticKey: 1,
          limit: limit,
          nextToken: nextToken,
          sortDirection: sortDirection,
          filter: strippedFilter
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

  const userVoteOnSubject = async (type, userId, subjectId) => {
    const voteInput = {
      id: `${userId}_${subjectId}`,
      userId: userId,
      objectId: subjectId,
      vote: type === "up" ? "up" : "down",
      voteOn: "subject"
    };

    window.log("Voting on subject...");
    setVoteLoading(true);
    try {
      const result = await API.graphql(
        graphqlOperation(voteOnSubject, { input: voteInput })
      );
      window.log(`Voted on subject!: ${JSON.stringify(result)}`);
      return result.data.voteOnSubject;
    } catch (error) {
      window.log(`Error voting on subject!: ${JSON.stringify(error)}`);
      throw error;
    } finally {
      setVoteLoading(false);
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
    listAllSubjectsOrderedByComments,
    voteLoading,
    userVoteOnSubject
  };
};

// export default useSubject;
