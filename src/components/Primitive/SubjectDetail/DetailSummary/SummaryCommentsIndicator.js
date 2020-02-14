import styled from "styled-components";
import React from "react";
import { useLanguage } from "CustomHooks/useLanguage";

const displayText = {
  en: {
    comment: "Comment"
  },
  sp: {
    comment: "Comentario"
  }
};

const CommentsIndicatorWrapper = ({ noOfComments, ...props }) => {
  const { language } = useLanguage();

  return (
    <div {...props}>
      {noOfComments}{" "}
      {noOfComments > 1
        ? language === "spanish"
          ? `${displayText.sp.comment}s`
          : `${displayText.en.comment}s`
        : noOfComments === 1
        ? language === "spanish"
          ? displayText.sp.comment
          : displayText.en.comment
        : language === "spanish"
        ? `${displayText.sp.comment}s`
        : `${displayText.en.comment}s`}
    </div>
  );
};

const SummaryCommentsIndicator = styled(CommentsIndicatorWrapper)`
  /* border: 1px solid lime; */
  height: 16px;
  width: auto;

  color: rgba(0, 0, 0, 0.54);
  font-family: Avenir;
  text-align: left;
  font-size: 12px;
`;

export default SummaryCommentsIndicator;
