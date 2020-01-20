import React from "react";
import styled from "styled-components";

import CommentTextArea from "components/Primitive/SubjectDetail/DetailBody/CommentTextAreaInput";
import CommentButton from "components/Primitive/SubjectDetail/DetailBody/CommentButton";
import LoadingSpinner from "components/Primitive/General/LoadingSpinner";
import ErrorText from "components/Primitive/General/ErrorText";

import CommentBoxAPI from "./API/CommentBoxAPI";
import useAPI from "CustomHooks/useAPI";

const CommentBoxWrapper = ({ secondary, subject, ...props }) => {
  const subjectId = subject.id;

  const api = useAPI(CommentBoxAPI, {
    commentText: "",
    commentError: ""
  });

  return (
    <div {...props}>
      <CommentTextArea
        value={api.commentText}
        onChange={event => api.updateCommentText(event.target.value)}
      />
      {api.commentError && <ErrorText>{api.commentError}</ErrorText>}
      <CommentButton
        secondary={secondary}
        onClick={() => api.submitComment(subjectId)}
      >
        {api.loading ? <LoadingSpinner /> : "Comment"}
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
