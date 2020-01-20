import { useComment } from "CustomHooks/useComment";
import { useUser } from "CustomHooks/user";

const CommentBoxAPI = ({ state, setState }) => {
  const commentText = state.commentText;
  const commentError = state.commentError;

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
    setState(() => {
      return {
        commentText: "",
        commentError: ""
      };
    });
  };

  const submitComment = async subjectId => {
    window.log("Creating comment...");
    setState(prevState => {
      return {
        ...prevState,
        commentError: ""
      };
    });
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
      await saveComment(userId, username, commentText, subjectId);
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
