import React from "react";
import styled from "styled-components";

import SubjectTitle from "components/Primitive/CreateSubject/ContentBody/SubjectTitle";
import SubjectContent from "components/Primitive/CreateSubject/ContentBody/SubjectContent";
import Error from "components/Primitive/General/ErrorText";
import { useLanguage } from "CustomHooks/useLanguage";

const displayText = {
  en: {
    char: "char",
    left: "left",
    title: "Title",
    titleError: "Please choose a title",
    contentCauseError: "Please describe your cause",
    contentPostError: "Please describe your post",
    content: "Post for all of Puerto Rico to hear!"
  },
  sp: {
    char: "cara",
    left: "Izquierdo",
    title: "Título",
    titleError: "Por favor elige un título",
    contentCauseError: "Por favor describa su causa",
    contentPostError: "Por favor describa su publicación",
    content: "¡Publica para que todo Puerto Rico lo escuche!"
  }
};

const ErrorText = styled(Error)`
  margin-right: auto;
`;

const Counter = styled.div`
  font-size: 16px;
  margin-left: auto;
`;

const ContentBodyWrapper = ({ secondary, api, ...props }) => {
  const { language } = useLanguage();

  return (
    <div {...props}>
      <Counter>
        {50 - api.subjectTitle.length}{" "}
        {language === "spanish" ? displayText.sp.char : displayText.en.char}
        {50 - api.subjectTitle.length > 1
          ? "s"
          : 50 - api.subjectTitle.length < 1
          ? "s"
          : ""}{" "}
        {language === "spanish" ? displayText.sp.left : displayText.en.left}
      </Counter>
      {api.titleIsErrored && (
        <ErrorText>
          {language === "spanish"
            ? displayText.sp.titleError
            : displayText.en.titleError}
        </ErrorText>
      )}
      <SubjectTitle
        placeholder={
          language === "spanish" ? displayText.sp.title : displayText.en.title
        }
        value={api.subjectTitle}
        onChange={event => api.updateSubjectTitle(event.target.value)}
      />
      {api.contentIsErrored &&
        (secondary ? (
          <ErrorText>
            {language === "spanish"
              ? displayText.sp.contentPostError
              : displayText.en.contentPostError}
          </ErrorText>
        ) : (
          <ErrorText>
            {language === "spanish"
              ? displayText.sp.contentCauseError
              : displayText.en.contentCauseError}
          </ErrorText>
        ))}
      <SubjectContent
        placeholder={
          language === "spanish"
            ? displayText.sp.content
            : displayText.en.content
        }
        value={api.subjectContent}
        onChange={event => api.updateSubjectContent(event.target.value)}
      />
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
