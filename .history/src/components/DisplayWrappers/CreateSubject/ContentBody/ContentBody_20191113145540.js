import React from "react";
import styled from "styled-components";

import SubjectTitle from "../../../Primitive/CreateSubject/ContentBody/SubjectTitle";
import SubjectContent from "../../../Primitive/CreateSubject/ContentBody/SubjectContent";
import ActionButton from "../../../Primitive/General/ActionButton";
import Error from "../../../Primitive/General/ErrorText";

const ErrorText = styled(Error)`
  margin-right: auto;
`;

const ContentBodyWrapper = ({ secondary, api, ...props }) => {
  return (
    <div {...props}>
      {api.titleIsErrored && <ErrorText>Please choose a title</ErrorText>}
      <SubjectTitle
        placeholder={"Title"}
        value={api.subjectTitle}
        onChange={event => api.updateSubjectTitle(event.target.value)}
      />
      {api.contentIsErrored &&
        (secondary ? (
          <ErrorText>Please describe your post</ErrorText>
        ) : (
          <ErrorText>Please describe your cause</ErrorText>
        ))}
      <SubjectContent
        placeholder={"Post for all of Puerto Rico to hear!"}
        value={api.subjectContent}
        onChange={event => api.updateSubjectContent(event.target.value)}
      />
      <ActionButton secondary={secondary} onClick={api.submit}>
        {secondary ? "Create Post" : "Create Cause"}
      </ActionButton>
    </div>
  );
};

const ContentBody = styled(ContentBodyWrapper)`
  /* border: 1px solid green; */

  /* 87% is roughly 650px wide */
  width: 87%;
  height: auto;

  margin-top: 33px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export default ContentBody;
