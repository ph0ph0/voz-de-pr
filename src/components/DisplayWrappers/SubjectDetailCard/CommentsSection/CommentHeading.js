import React from "react";
import styled from "styled-components";

import NameTimeAgo from "components/Primitive/SubjectCard/NameTimeAgo";
import VotesOnComment from "components/Primitive/SubjectDetail/CommentsSection/VotesOnComment";
import VoteArrow from "components/Primitive/SubjectDetail/DetailSummary/VoteArrow";

import { parseTime } from "Utils/TimePassedCalculator";
import LoadingSpinner from "components/Primitive/General/LoadingSpinner";

const CommentHeadingWrapper = ({
  comment,
  currentVoteOnComment,
  secondary,
  api,
  ...props
}) => {
  const timePassed = parseTime(comment.createdAt);

  const upArrowColour =
    currentVoteOnComment === "up" && secondary
      ? "#1B4EA0"
      : currentVoteOnComment === "up"
      ? "#EC220D"
      : "#919191";
  const downArrowColour =
    currentVoteOnComment === "down" && secondary
      ? "#1B4EA0"
      : currentVoteOnComment === "down"
      ? "#EC220D"
      : "#919191";

  return (
    <div {...props}>
      <NameTimeAgo>{comment.author}</NameTimeAgo>
      <NameTimeAgo isTimeAgo>{timePassed}</NameTimeAgo>
      <VotesOnComment votesOnComment={comment.votes} />
      {api.commentVoteLoading ? (
        <LoadingSpinner colour={"#1B4EA0"} />
      ) : (
        <>
          <VoteArrow
            small
            onClick={() => api.clickedCommentUpVote(comment.id)}
            colour={upArrowColour}
          />
          <VoteArrow
            small
            pointDown
            onClick={() => api.clickedCommentDownVote(comment.id)}
            colour={downArrowColour}
          />
        </>
      )}
    </div>
  );
};

const CommentHeading = styled(CommentHeadingWrapper)`
  /* border: 1px solid orange; */
  display: flex;
  align-items: center;
`;

export default CommentHeading;
