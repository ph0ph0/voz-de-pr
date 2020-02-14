import React from "react";
import styled from "styled-components";
import { useLanguage } from "CustomHooks/useLanguage";

const displayText = {
  en: {
    votes: "VOTE"
  },
  sp: {
    votes: "VOTO"
  }
};

const VotesOnSubjectWrapper = ({ votesOnSubject, secondary, ...props }) => {
  const { language } = useLanguage();

  return (
    <p {...props}>
      {votesOnSubject}{" "}
      {votesOnSubject > 1
        ? language === "spanish"
          ? `${displayText.sp.votes}S`
          : `${displayText.en.votes}S`
        : votesOnSubject === 1
        ? language === "spanish"
          ? displayText.sp.votes
          : displayText.en.votes
        : language === "spanish"
        ? `${displayText.sp.votes}S`
        : `${displayText.en.votes}S`}
    </p>
  );
};

const VotesOnSubject = styled(VotesOnSubjectWrapper)`
  font-size: 20px;
  color: ${props =>
    props.secondary ? props.theme.secondaryColour : props.theme.primaryColour};

  margin: 0px;
  padding: 0px;
  line-height: 2em;

  vertical-align: center;

  margin-left: auto;
`;

export default VotesOnSubject;
