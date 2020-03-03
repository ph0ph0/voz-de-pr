import React from "react";
import styled from "styled-components";

import BubbleWrapper from "./BubbleWrapper";
import CommentsIndicator from "components/Primitive/SubjectCard/CommentsIndicator";

import { useLanguage } from "CustomHooks/useLanguage";

const displayText = {
  en: "comment",
  sp: "Comentarios"
};

const Wrapper = ({ numberOfComments, ...props }) => {
  const { language } = useLanguage();

  return (
    <div {...props}>
      <BubbleWrapper />
      <CommentsIndicator>
        {numberOfComments}{" "}
        {numberOfComments > 1
          ? `${language === "spanish" ? displayText.sp : displayText.en}s`
          : numberOfComments === 1
          ? `${language === "spanish" ? displayText.sp : displayText.en}`
          : `${language === "spanish" ? displayText.sp : displayText.en}s`}
      </CommentsIndicator>
    </div>
  );
};

const BottomWrapper = styled(Wrapper)`
  /* border: 1px solid blue; */
  width: 100%;
  height: 16px;

  margin-top: 9px;

  display: flex;
  place-content: flex-start;
`;

export default BottomWrapper;
