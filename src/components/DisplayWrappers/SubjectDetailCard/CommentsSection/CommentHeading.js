import React from "react";
import styled from "styled-components";

import NameTimeAgo from "../../../Primitive/SubjectCard/NameTimeAgo";
import VotesOnComment from "../../../Primitive/SubjectDetail/CommentsSection/VotesOnComment";
import VoteArrow from "../../../Primitive/SubjectDetail/DetailSummary/VoteArrow";

import { parseTime } from "Utils/TimePassedCalculator";

const CommentHeadingWrapper = ({ comment, api, ...props }) => {
  const timePassed = parseTime(comment.createdAt);
  return (
    <div {...props}>
      <NameTimeAgo>{comment.author}</NameTimeAgo>
      <NameTimeAgo isTimeAgo>{timePassed}</NameTimeAgo>
      <VotesOnComment votesOnComment={comment.votes} />
      <VoteArrow small onClick={() => api.clickedCommentUpVote(comment.id)} />
      <VoteArrow
        small
        pointDown
        onClick={() => api.clickedCommentDownVote(comment.id)}
      />
    </div>
  );
};

const CommentHeading = styled(CommentHeadingWrapper)`
  /* border: 1px solid orange; */
  display: flex;
  align-items: center;
`;

export default CommentHeading;
