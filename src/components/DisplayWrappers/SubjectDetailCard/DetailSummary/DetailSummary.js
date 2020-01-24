import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import BubbleWrapper from "../../SubjectCard/LeftContent/BubbleWrapper";
import CommentsIndicator from "components/Primitive/SubjectDetail/DetailSummary/SummaryCommentsIndicator";
import SubjectID from "components/Primitive/SubjectDetail/DetailSummary/SubjectID";
import VotesOnSubject from "components/Primitive/SubjectDetail/General/VotesOnSubject";
import VoteArrow from "components/Primitive/SubjectDetail/DetailSummary/VoteArrow";

import { useSubject } from "CustomHooks/useSubject";
import { useUser } from "CustomHooks/user";

// Imported into Primitive/SubjectDetail/General/VotesOnSubject story
export const VotesOnSubjectInSummary = styled(VotesOnSubject)`
  /* border: 1px solid purple; */
  font-size: 12px;
`;

const DetailSummaryWrapper = ({
  secondary,
  noOfComments,
  subjectID,
  votesOnSubject,
  ...props
}) => {
  const { userVoteOnSubject, voteLoading } = useSubject();
  const { user } = useUser();

  const clickedUpVote = async () => {
    window.log("Clicked up vote!");
    const userId = user.id;
    try {
      await userVoteOnSubject("up", userId, subjectID);
    } catch (error) {
      window.log(`Error voting: ${error}`);
    }
  };

  return (
    <div {...props}>
      <BubbleWrapper />
      <CommentsIndicator noOfComments={noOfComments} />
      <SubjectID secondary={secondary} subjectID={subjectID} />
      <VotesOnSubjectInSummary
        secondary={secondary}
        votesOnSubject={votesOnSubject}
      />
      <VoteArrow onClick={clickedUpVote} />
      <VoteArrow pointDown />
    </div>
  );
};

const DetailSummary = styled(DetailSummaryWrapper)`
  /* border: 1px solid blue; */
  width: 100%;
  height: 20px;

  margin-top: 24px;
  margin-bottom: 12px;
  padding: 0 21px 0 21px;

  box-sizing: border-box;

  display: flex;
  /* place-content: flex-start; */
  align-items: center;
`;

DetailSummary.propTypes = {
  noOfComments: PropTypes.number.isRequired,
  secondary: PropTypes.bool,
  subjectID: PropTypes.string.isRequired,
  votesOnSubject: PropTypes.number.isRequired
};

export default DetailSummary;
