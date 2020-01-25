import { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createComment } from "graphql/mutations";
import { voteOnComment } from "graphql-custom/mutations.js";

export const useComment = () => {
  const [loading, setLoading] = useState(false);

  const saveComment = async (userId, username, commentText, subjectId) => {
    setLoading(true);

    const commentInput = {
      createdBy: userId,
      author: username,
      text: commentText,
      subjectId: subjectId
    };
    try {
      const commentObject = await API.graphql(
        graphqlOperation(createComment, { input: commentInput })
      );
      window.log(`Saved comment!: ${JSON.stringify(commentObject)}`);
      return commentObject;
    } catch (error) {
      window.log(
        `Error creating comment in useComment!: ${JSON.stringify(error)}`
      );
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const userVoteOnComment = async (type, userId, commentId) => {
    const voteInput = {
      id: `${userId}_${commentId}`,
      userId: userId,
      objectId: commentId,
      vote: type === "up" ? "up" : "down",
      voteOn: "comment"
    };

    window.log("Voting on subject...");
    setLoading(true);
    try {
      const result = await API.graphql(
        graphqlOperation(voteOnComment, { input: voteInput })
      );
      window.log(`Voted on subject!: ${JSON.stringify(result)}`);
      return result.data.voteOnSubject;
    } catch (error) {
      window.log(`Error voting on subject!: ${JSON.stringify(error)}`);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    userVoteOnComment,
    loading,
    saveComment
  };
};
