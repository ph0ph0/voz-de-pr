import { useState } from "react";
import useComment from "CustomHooks/useComment";

const CommentBoxAPI = ({ state, setState }) => {
  const { createComment, loading } = useComment();

  const commentText = state.commentText;
  const commentError = state.commentError;

  const updateCommentText = newValue => {
    const comment = newValue.trim();
    setState(prevState => {
      return {
        ...prevState,
        commentText: comment
      };
    });
  };

  const resetAll = () => {
    setState(() => {
      return {
        commentText: "",
        commentError: ""
      };
    });
  };

  const submitComment = async () => {
    try {
      await createComment(commentText);
      window.log("Successfully createdComment!");
      resetAll();
    } catch (error) {
      window.log(`Error submitting comment: ${error}`);
      const errorText =
        "There was an error submitting your comment, please try again later";
      setState(prevState => {
        return {
          ...prevState,
          commentError: errorText
        };
      });
    }
  };

  return {
    commentText,
    commentError,
    loading,
    updateCommentText,
    submitComment
  };
};

export default CommentBoxAPI;
