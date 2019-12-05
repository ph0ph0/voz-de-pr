import React from "react";
import styled from "styled-components";

import Comment from "./Comment";

const CommentsSectionWrapper = ({ comments, ...props}) => {
  return (
    <div {...props}>
      {comments.map((comment, index) => (
        <Comment 
          key = {index}
          votesOnComment = {comment.votes} 
          commentContent = {comment.text} 
          author = {comment.author} 
          timePassed = {comment.timePassed}
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