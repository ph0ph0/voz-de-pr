import React from "react";
import styled from "styled-components";

import Comment from "./Comment";

const CommentsSectionWrapper = ({ api, secondary, ...props }) => {
  // window.log(`Comments in commentSection: ${JSON.stringify(comments)}`);
  const timeOrderedComments = api.comments
    .sort((a, b) => {
      return new Date(a.createdAt) - new Date(b.createdAt);
    })
    .reverse();
  return (
    <div {...props}>
      {timeOrderedComments.map((comment, index) => (
        <Comment
          key={index}
          api={api}
          comment={comment}
          secondary={secondary}
        />
      ))}
    </div>
  );
};

const CommentsSection = styled(CommentsSectionWrapper)`
  /* border: 1px solid red; */
  border-left: 1px solid rgba(151, 151, 151, 1);

  margin-top: 20px;

  box-sizing: border-box;
  width: 602px;
`;

export default CommentsSection;
