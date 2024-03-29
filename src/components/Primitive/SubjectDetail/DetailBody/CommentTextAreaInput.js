import React from "react";
import styled from "styled-components";
import { useLanguage } from "CustomHooks/useLanguage";

const displayText = {
  en: {
    opinion: "What's your opinion?"
  },
  sp: {
    opinion: "¿Cuál es su opinión?"
  }
};

const CommentTextAreaWrapper = ({ ...props }) => {
  const { language } = useLanguage();

  return (
    <textarea
      {...props}
      placeholder={
        language === "spanish" ? displayText.sp.opinion : displayText.en.opinion
      }
    />
  );
};

const CommentTextArea = styled(CommentTextAreaWrapper)`
  color: rgba(0, 0, 0, 0.54);
  border: 1px solid rgba(237, 239, 241, 1);
  border-radius: 5px 5px 0px 0px;
  /* Mozilla takes font parameters from browser instead of style sheet for TextAreas... */
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  font-size: 12px;

  box-sizing: border-box;
  width: 100%;
  height: 100px;
  padding: 0px;
  margin: 0px;
  margin-bottom: 5px;
  padding-top: 13px;
  padding-left: 25px;

  resize: none;
  :focus {
    outline: 0;
  }
`;

export default CommentTextArea;
