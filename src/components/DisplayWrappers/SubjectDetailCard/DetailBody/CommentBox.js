import React from "react";
import styled from "styled-components";

import CommentTextArea from "components/Primitive/SubjectDetail/DetailBody/CommentTextAreaInput";
import CommentButton from "components/Primitive/SubjectDetail/DetailBody/CommentButton";
import LoadingSpinner from "components/Primitive/General/LoadingSpinner";
import ErrorText from "components/Primitive/General/ErrorText";

const CommentBoxWrapper = ({ secondary, subject, commentApi, ...props }) => {
  const subjectId = subject.id;

  return (
    <div {...props}>
      <CommentTextArea
        value={commentApi.commentText}
        onChange={event => commentApi.updateCommentText(event.target.value)}
      />
      {commentApi.commentError && (
        <ErrorText>{commentApi.commentError}</ErrorText>
      )}
      <CommentButton
        secondary={secondary}
        onClick={() => commentApi.submitComment(subjectId)}
      >
        {commentApi.loading ? <LoadingSpinner /> : "Comment"}
      </CommentButton>
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
