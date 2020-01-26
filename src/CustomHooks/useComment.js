import { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createComment } from "graphql/mutations";
import { votesOnObjectByUser } from "graphql/queries";
import { voteOnComment } from "graphql-custom/mutations.js";

export const useComment = () => {
  const [loading, setLoading] = useState(false);
  const [commentVoteLoading, setCommentVoteLoading] = useState(false);

  const saveComment = async (userId, username, commentText, subjectId) => {
    setLoading(true);

    const commentInput = {
      createdBy: userId,
      author: username,
      text: commentText,
      subjectId: subjectId,
      votes: 0
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

    window.log("Voting on comment...");
    setLoading(true);
    try {
      const result = await API.graphql(
        graphqlOperation(voteOnComment, { input: voteInput })
      );
      window.log(`Voted on comment!: ${JSON.stringify(result)}`);
      return result.data.voteOnComment;
    } catch (error) {
      window.log(`Error voting on comment!: ${JSON.stringify(error)}`);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const votesOnCommentByUser = async (commentId, userId) => {
    window.log(
      `Getting votes on comment using sID, uID: ${commentId}, ${userId}`
    );
    setCommentVoteLoading(true);
    try {
      const result = await API.graphql({
        query: votesOnObjectByUser,
        variables: {
          objectVotedOnId: commentId,
          createdBy: { eq: userId }
        }
      });
      window.log(`votesOnCommentByUser: ${JSON.stringify(result)}`);
      const voteOnObject = result.data.votesOnObjectByUser.items;
      return voteOnObject;
    } catch (error) {
      window.log(`Error getting votes on comment: ${JSON.stringify(error)}`);
      throw error;
    } finally {
      setCommentVoteLoading(false);
    }
  };

  return {
    userVoteOnComment,
    votesOnCommentByUser,
    loading,
    commentVoteLoading,
    saveComment
  };
};
