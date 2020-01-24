import { useEffect } from "react";
import { useComment } from "CustomHooks/useComment";
import { useUser } from "CustomHooks/user";

const SubjectDetailContentAPI = ({ state, setState }) => {
  const commentText = state.commentText;
  const commentError = state.commentError;
  const comments = state.comments;
  const pictureURL = state.pictureURL;
  const subject = state.subject;
  //Used to download the subject
  const subjectId = state.subjectId;
  const isSecondary = state.isSecondary;
  window.log(`COMMENTS in commentAPI: ${JSON.stringify(comments)}`);

  const { saveComment, loading: commentLoading } = useComment();
  const { user } = useUser();
  const { getSubjectPicture, loading: pictureLoading } = useSubject();

  //From SubjectDetailPage
  const { downloadSubject, loading: subjectLoading } = useSubject();

  //Firstly, get Subject
  useEffect(() => {
    let isMounted = true;
    (async function fetchSubject() {
      window.log(`SubjectId for downloading subject: ${subjectId}`);

      const result = await downloadSubject(subjectId);
      const subject = result.data.getSubject;
      window.log(`Got subject: ${JSON.stringify(subject)}`);
      if (!isMounted) {
        window.log(
          "Subject detail was no longer mounted, aborting setting state"
        );
        return;
      }
      const comments =
        (subject && subject.comments && subject.comments.items) || [];
      setState((...prevState) => {
        return {
          ...prevState,
          subject: subject,
          comments: comments
        };
      });
      if (subject !== null) {
        //secondary here determines which side panel should be shown; the post one or the cause one.
        const secondary =
          subject.type && subject.type === "post" ? true : false;
        setState((...prevState) => {
          return {
            ...prevState,
            isSecondary: secondary
          };
        });
      }
    })();

    return () => (isMounted = false);
  }, []);

  //Between is from SubjectDetail
  //   let comments = [];

  //   if (subject && subject.comments && subject.comments.items) {
  //     comments = subject.comments.items;
  //   }

  //Once the subject has downloaded, download the picture
  const fetchPictures = async key => {
    try {
      const pictures = await getSubjectPicture(key);
      return pictures;
    } catch (error) {
      window.log(`Error fetching pictures for subject: ${error}`);
      throw error;
    }
  };

  useEffect(() => {
    let isMounted = true;
    try {
      var key =
        subject.pictures &&
        subject.pictures.items[0] &&
        subject.pictures.items[0].key;
      var compressedImageKey = key.replace(
        "subjectPictures",
        "subjectPictures-detailImages_670x460"
      );
      (async function fetchAndGetPictures() {
        const pictures = await fetchPictures(compressedImageKey);
        if (isMounted === false) {
          window.log("Subject Card was not mounted, aborting setting picture");
          return;
        }
        setState(prevState => {
          return {
            ...prevState,
            pictureURL: pictures
          };
        });
      })();
    } catch (error) {
      window.log(
        `Error getting subject picture in useEffect of RightContent: ${error}`
      );
      setState(prevState => {
        return {
          ...prevState,
          pictureURL: null
        };
      });
    }
    return () => (isMounted = false);
  }, [subject]);

  //COMMENT API

  const updateCommentText = newValue => {
    window.log(`new comment text: ${newValue}`);
    setState(prevState => {
      return {
        ...prevState,
        commentText: newValue
      };
    });
  };

  const resetCommentState = () => {
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
      resetCommentState();
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
    pictureURL,
    subject,
    subjectId,
    isSecondary,
    commentLoading,
    pictureLoading,
    subjectLoading,
    updateCommentText,
    submitComment
  };
};

export default SubjectDetailContentAPI;
