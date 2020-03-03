import React from "react";
import styled from "styled-components";

import SubjectVotes from "components/Primitive/SubjectCard/SubjectVotes";
import SubjectType from "components/Primitive/SubjectCard/SubjectType";
import { useLanguage } from "CustomHooks/useLanguage";

const displayText = {
  en: {
    vote: "VOTE",
    post: "Post",
    cause: "Cause"
  },
  sp: {
    vote: "VOTO",
    post: "Publicación",
    cause: "Causa"
  }
};

const Wrapper = ({ numberOfVotes, secondary, ...props }) => {
  const { language } = useLanguage();

  const type = secondary
    ? `${language === "spanish" ? displayText.sp.post : displayText.en.post}`
    : `${language === "spanish" ? displayText.sp.cause : displayText.en.cause}`;

  return (
    <div {...props}>
      <SubjectVotes secondary={secondary}>
        {numberOfVotes}{" "}
        {numberOfVotes > 1
          ? `${
              language === "spanish" ? displayText.sp.vote : displayText.en.vote
            }S`
          : numberOfVotes === 1
          ? `${
              language === "spanish" ? displayText.sp.vote : displayText.en.vote
            }`
          : `${
              language === "spanish" ? displayText.sp.vote : displayText.en.vote
            }S`}
      </SubjectVotes>
      <SubjectType secondary={secondary}>{type}</SubjectType>
    </div>
  );
};

const SubjectInfoWrapper = styled(Wrapper)`
  /* 74% aligns the text over the image */
  width: 74%;
  height: 22px;

  display: flex;
  flex-direction: row;
`;

export default SubjectInfoWrapper;
