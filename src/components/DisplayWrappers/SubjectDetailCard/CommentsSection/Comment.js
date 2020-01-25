import React from "react";
import styled from "styled-components";

import CommentHeading from "./CommentHeading";
import CommentContent from "../../../Primitive/SubjectDetail/CommentsSection/CommentContent";

const CommentWrapper = ({ api, comment, ...props }) => {
  return (
    <div {...props}>
      <CommentHeading comment={comment} api={api} />
      <CommentContent commentContent={comment.text} />
    </div>
  );
};

const Comment = styled(CommentWrapper)``;

export default Comment;
