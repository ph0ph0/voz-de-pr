import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import BubbleWrapper from "../../SubjectCard/LeftContent/BubbleWrapper";
import CommentsIndicator from "components/Primitive/SubjectDetail/DetailSummary/SummaryCommentsIndicator";
import SubjectID from "components/Primitive/SubjectDetail/DetailSummary/SubjectID";
import VotesOnSubject from "components/Primitive/SubjectDetail/General/VotesOnSubject";
import VoteArrow from "components/Primitive/SubjectDetail/DetailSummary/VoteArrow";
import Spinner from "components/Primitive/General/LoadingSpinner";

// Imported into Primitive/SubjectDetail/General/VotesOnSubject story
export const VotesOnSubjectInSummary = styled(VotesOnSubject)`
  /* border: 1px solid purple; */
  font-size: 12px;
`;

const DetailSummaryWrapper = ({ secondary, api, ...props }) => {
  const spinnerColour = secondary ? "#1B4EA0" : "#EC220D";

  const upArrowColour =
    api.currentVoteOnSubject === "up" && secondary
      ? "#1B4EA0"
      : api.currentVoteOnSubject === "up"
      ? "#EC220D"
      : "#919191";
  const downArrowColour =
    api.currentVoteOnSubject === "down" && secondary
      ? "#1B4EA0"
      : api.currentVoteOnSubject === "down"
      ? "#EC220D"
      : "#919191";

  return (
    <div {...props}>
      <BubbleWrapper />
      <CommentsIndicator noOfComments={api.comments.length} />
      <SubjectID secondary={secondary} subjectID={api.subjectId} />
      <VotesOnSubjectInSummary
        secondary={secondary}
        votesOnSubject={api.subject.votes}
      />
      {api.voteLoading ? (
        <LoadingSpinner colour={spinnerColour} />
      ) : (
        <>
          <VoteArrow
            onClick={api.clickedSubjectUpVote}
            colour={upArrowColour}
          />
          <VoteArrow
            pointDown
            onClick={api.clickedSubjectDownVote}
            colour={downArrowColour}
          />
        </>
      )}
    </div>
  );
};

const LoadingSpinner = styled(Spinner)`
  margin-left: 10px;
`;

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

// DetailSummary.propTypes = {
//   noOfComments: PropTypes.number.isRequired,
//   secondary: PropTypes.bool,
//   subjectID: PropTypes.string.isRequired,
//   votesOnSubject: PropTypes.number.isRequired
// };

export default DetailSummary;
