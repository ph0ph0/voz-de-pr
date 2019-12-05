import React from "react";
import styled from "styled-components";

import CommentTextArea from "../../../Primitive/SubjectDetail/DetailBody/CommentTextAreaInput";
import CommentButton from "../../../Primitive/SubjectDetail/DetailBody/CommentButton";

const CommentBoxWrapper = ({secondary, ...props}) => {
  return (
    <div {...props}>
      <CommentTextArea />
      <CommentButton secondary = {secondary}/>
    </div>
  );
};

const CommentBox = styled(CommentBoxWrapper)`
    padding-bottom: 5px;
    border-radius: 5px;

    /* background-color: black; */
    background-color: rgba(216, 216, 216, 0.28);

    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export default CommentBox;