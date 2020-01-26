import { useEffect } from "react";
import { useComment } from "CustomHooks/useComment";
import { useUser } from "CustomHooks/user";
import { useSubject } from "CustomHooks/useSubject";

const SubjectDetailContentAPI = ({ state, setState }) => {
  const commentText = state.commentText;
  const commentError = state.commentError;
  const comments = state.comments;
  const pictureURL = state.pictureURL;
  const subject = state.subject;
  //Used to download the subject
  const subjectId = state.subjectId;
  const isSecondary = state.isSecondary;
  const currentVoteOnSubject = state.currentVoteOnSubject;

  const {
    saveComment,
    loading: commentLoading,
    userVoteOnComment
  } = useComment();

  const { user } = useUser();
  const {
    getSubjectPicture,
    loading: pictureLoading,
    userVoteOnSubject,
    voteLoading,
    votesOnSubjectByUser
  } = useSubject();

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
      const comments = subject && subject.comments && subject.comments.items;
      setState(prevState => {
        window.log(
          `Previous state before setting subject/comments: ${JSON.stringify(
            prevState
          )}`
        );
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
        setState(prevState => {
          return {
            ...prevState,
            isSecondary: secondary
          };
        });
      }
    })();

    return () => (isMounted = false);
  }, []);

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

  //Once picture has been downloaded, check if the user has voted on the subject yet

  useEffect(() => {
    window.log("************Getting user vote on subject");
    let isMounted = true;
    if (!user) {
      window.log("***********No user, aborting getting votes on subject");
      return;
    }

    (async function checkSubjectVotes() {
      window.log("************Checking user vote on subject");
      const voteObject = await getUserVoteOnSubject();
      window.log(`Got voteObject in uE: ${JSON.stringify(voteObject)}`);
      if (voteObject === undefined) {
        window.log(
          `User hasn't voted on subject yet, nulling current vote on subject...`
        );
        if (!isMounted) return;
        setState(prevState => {
          return {
            ...prevState,
            currentVoteOnSubject: null
          };
        });
        return;
      }
      const currentVote = voteObject.vote;
      window.log(
        `User has voted on subject, setting current vote: ${currentVote}`
      );
      if (!isMounted) return;
      setState(prevState => {
        return {
          ...prevState,
          currentVoteOnSubject: currentVote
        };
      });
    })();

    return () => (isMounted = false);
  }, [subject]);

  //VOTE API
  const clickedSubjectUpVote = async () => {
    window.log("Clicked up vote!");
    const userId = user.id;
    try {
      const subject = await userVoteOnSubject("up", userId, subjectId);
      window.log(`SUB FROM VOTE: ${JSON.stringify(subject)}`);
      setState(prevState => {
        return {
          ...prevState,
          subject
        };
      });
    } catch (error) {
      window.log(`Error voting: ${error}`);
    }
  };

  const clickedSubjectDownVote = async () => {
    window.log("Clicked up vote!");
    const userId = user.id;
    try {
      const subject = await userVoteOnSubject("down", userId, subjectId);
      setState(prevState => {
        return {
          ...prevState,
          subject
        };
      });
    } catch (error) {
      window.log(`Error voting: ${error}`);
    }
  };

  const getUserVoteOnSubject = async () => {
    if (!user || !user.id) {
      window.log("No user, aborting getting votes on subject");
      return;
    }
    try {
      const userVoteObject = await votesOnSubjectByUser(subjectId, user.id);
      window.log(
        `**************userVoteObject: ${JSON.stringify(userVoteObject)}`
      );
      return userVoteObject[0];
    } catch (error) {
      window.log(`Error getting user votes on subject: ${error}`);
    }
  };

  const clickedCommentUpVote = async commentId => {
    window.log("Clicked up vote!");
    const userId = user.id;
    try {
      await userVoteOnComment("up", userId, commentId);
      const result = await downloadSubject(subjectId);
      const subject = result.data.getSubject;
      window.log(`Got subject: ${JSON.stringify(subject)}`);
      const comments = subject && subject.comments && subject.comments.items;
      setState(prevState => {
        window.log(
          `Previous state before setting subject/comments: ${JSON.stringify(
            prevState
          )}`
        );
        return {
          ...prevState,
          comments: comments
        };
      });
    } catch (error) {
      window.log(`Error voting: ${error}`);
    }
  };

  const clickedCommentDownVote = async commentId => {
    window.log("Clicked up vote!");
    const userId = user.id;
    try {
      await userVoteOnComment("up", userId, commentId);
      const result = await downloadSubject(subjectId);
      const subject = result.data.getSubject;
      window.log(`Got subject: ${JSON.stringify(subject)}`);
      const comments = subject && subject.comments && subject.comments.items;
      setState(prevState => {
        window.log(
          `Previous state before setting subject/comments: ${JSON.stringify(
            prevState
          )}`
        );
        return {
          ...prevState,
          comments: comments
        };
      });
    } catch (error) {
      window.log(`Error voting: ${error}`);
    }
  };

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
      await saveComment(userId, username, commentText, subjectId);
      const result = await downloadSubject(subjectId);
      const subject = result.data.getSubject;
      window.log(`Got subject: ${JSON.stringify(subject)}`);
      const comments = subject && subject.comments && subject.comments.items;
      setState(prevState => {
        window.log(
          `Previous state before setting subject/comments: ${JSON.stringify(
            prevState
          )}`
        );
        return {
          ...prevState,
          comments: comments
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
    currentVoteOnSubject,
    commentLoading,
    pictureLoading,
    subjectLoading,
    voteLoading,
    clickedSubjectUpVote,
    clickedSubjectDownVote,
    clickedCommentUpVote,
    clickedCommentDownVote,
    updateCommentText,
    submitComment
  };
};

export default SubjectDetailContentAPI;
