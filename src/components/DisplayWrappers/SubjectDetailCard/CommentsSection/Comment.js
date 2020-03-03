import React, { useEffect, useState } from "react";
import styled from "styled-components";

import CommentHeading from "./CommentHeading";
import CommentContent from "../../../Primitive/SubjectDetail/CommentsSection/CommentContent";

const CommentWrapper = ({ api, comment, secondary, ...props }) => {
  const [currentVoteOnComment, setCurrentVoteOnComment] = useState(null);

  useEffect(() => {
    window.log("Getting user vote on comment");
    let isMounted = true;
    if (!api.user) {
      window.log("No user, aborting getting votes on comment");
      return;
    }

    (async function checkCommentVotes() {
      window.log("Checking user vote on comment");
      const voteObject = await api.getUserVoteOnComment(comment.id);
      window.log(`Got voteObject in uE: ${JSON.stringify(voteObject)}`);
      if (voteObject === undefined) {
        window.log(
          `User hasn't voted on comment yet, nulling current vote on comment...`
        );
        if (!isMounted) return;
        setCurrentVoteOnComment(null);
        return;
      }
      const currentVote = voteObject.vote;
      window.log(
        `User has voted on comment, setting current vote: ${currentVote}`
      );
      if (!isMounted) return;
      setCurrentVoteOnComment(currentVote);
    })();

    return () => (isMounted = false);
  }, [comment]);

  return (
    <div {...props}>
      <CommentHeading
        comment={comment}
        api={api}
        currentVoteOnComment={currentVoteOnComment}
        secondary={secondary}
      />
      <CommentContent commentContent={comment.text} />
    </div>
  );
};

const Comment = styled(CommentWrapper)``;

export default Comment;
