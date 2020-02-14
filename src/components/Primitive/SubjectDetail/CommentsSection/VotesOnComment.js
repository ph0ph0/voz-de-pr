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

const CommentNumberOfVotesWrapper = ({ votesOnComment, ...props }) => {
  const { language } = useLanguage();

  return (
    <p {...props}>
      {votesOnComment}{" "}
      {votesOnComment > 1
        ? language === "spanish"
          ? `${displayText.sp.votes}S`
          : `${displayText.en.votes}S`
        : votesOnComment === 1
        ? language === "spanish"
          ? displayText.sp.votes
          : displayText.en.votes
        : language === "spanish"
        ? `${displayText.sp.votes}S`
        : `${displayText.en.votes}S`}
    </p>
  );
};

const CommentNumberOfVotes = styled(CommentNumberOfVotesWrapper)`
  font-weight: bold;
  font-size: 12px;
  line-height: 2.2em;
  color: rgba(117, 117, 117, 1);

  margin: 0px;
  padding: 0px;
  margin-left: 10px;
`;

export default CommentNumberOfVotes;
