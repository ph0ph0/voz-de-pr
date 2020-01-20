import { useComment } from "CustomHooks/useComment";
import { useUser } from "CustomHooks/user";

const CommentAPI = ({ state, setState }) => {
  const commentText = state.commentText;
  const commentError = state.commentError;
  const comments = state.comments;
  window.log(`COMMENTS in commentAPI: ${JSON.stringify(comments)}`);

  const { saveComment, loading } = useComment();
  const { user } = useUser();

  const updateCommentText = newValue => {
    window.log(`new comment text: ${newValue}`);
    setState(prevState => {
      return {
        ...prevState,
        commentText: newValue
      };
    });
  };

  const resetAll = () => {
    setState(prevState => {
      return {
        ...prevState,
        commentText: "",
        commentError: ""
      };
    });
  };

  const submitComment = async subjectId => {
    window.log("Creating comment...");
    if (commentError !== "") {
      setState(prevState => {
        return {
          ...prevState,
          commentError: ""
        };
      });
    }
    if (commentText.trim() === "") {
      window.log("Comment text was empty!");
      setState(prevState => {
        return {
          ...prevState,
          commentError: "Please add some text to your comment!"
        };
      });
      return;
    }
    try {
      const userId = user && user.id;
      const username = user && user.username;
      window.log("Awaiting save...");
      const result = await saveComment(
        userId,
        username,
        commentText,
        subjectId
      );
      const newComment = result.data.createComment;
      window.log(`Adding new comment to array: ${JSON.stringify(newComment)}`);
      setState(prevState => {
        return {
          ...prevState,
          comments: [newComment, ...comments]
        };
      });
      window.log(
        `Successfully createdComment! New array: ${JSON.stringify(comments)}`
      );
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
    comments,
    loading,
    updateCommentText,
    submitComment
  };
};

export default CommentAPI;
