import React from "react";
import styled from "styled-components";

import CommentHeading from "./CommentHeading";
import CommentContent from "../../../Primitive/SubjectDetail/CommentsSection/CommentContent";

import { parseTime } from "Utils/TimePassedCalculator";

const CommentWrapper = ({
  votesOnComment,
  commentContent,
  author,
  createdAt,
  ...props
}) => {
  const timePassed = parseTime(createdAt);

  return (
    <div {...props}>
      <CommentHeading
        votesOnComment={votesOnComment}
        author={author}
        timePassed={timePassed}
      />
      <CommentContent commentContent={commentContent} />
    </div>
  );
};

const Comment = styled(CommentWrapper)``;

export default Comment;
