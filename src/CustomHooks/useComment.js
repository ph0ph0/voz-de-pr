import { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createComment } from "graphql/mutations";

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

  return {
    loading,
    saveComment
  };
};
