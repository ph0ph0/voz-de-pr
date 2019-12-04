import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import BubbleWrapper from "../../SubjectCard/LeftContent/BubbleWrapper";
import CommentsIndicator from "../../../Primitive/SubjectDetail/DetailSummary/SummaryCommentsIndicator";
import SubjectID from "../../../Primitive/SubjectDetail/DetailSummary/SubjectID";
import VotesOnSubject from "../../../Primitive/SubjectDetail/General/VotesOnSubject";
import VoteArrow from "../../../Primitive/SubjectDetail/DetailSummary/VoteArrow";

// Imported into Primitive/SubjectDetail/General/VotesOnSubject story
export const VotesOnSubjectInSummary = styled(VotesOnSubject)`
    /* border: 1px solid purple; */
    font-size: 12px;
`;

const DetailSummaryWrapper = ({ secondary, noOfComments, subjectID, votesOnSubject, ...props}) => {
  return (
    <div {...props}>
      <BubbleWrapper />
      <CommentsIndicator noOfComments = {noOfComments}/>
      <SubjectID secondary = {secondary} subjectID = {subjectID}/>
      <VotesOnSubjectInSummary secondary = {secondary} votesOnSubject = {votesOnSubject}/>
      <VoteArrow />
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