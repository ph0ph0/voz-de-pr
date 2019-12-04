import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import DetailHeader from "./DetailHeader/DetailHeader";
import DetailImage from "../../Primitive/SubjectDetail/DetailImage/DetailImage";
import DetailSummary from "./DetailSummary/DetailSummary";
import DetailBody from "./DetailBody/DetailBody";
import CommentsSection from "./CommentsSection/CommentsSection";

const SubjectDetailContentWrapper = (
  { 
    secondary, 
    subject,
    ...props
  }) => {
        
  const numberOfComments = subject.comments && subject.comments.length;

  return (
    <div {...props}>
      <DetailHeader secondary = {secondary} votesOnSubject = {subject.votes}/>
      <DetailImage src = {subject.subjectImage} />
      <DetailSummary secondary = {secondary} subjectID = {subject.id} votesOnSubject = {subject.votes} noOfComments = {numberOfComments}/>
      <DetailBody secondary = {secondary} subjectContent = {subject.subjectContent}/>
      {subject.comments && (subject.comments.length !== 0) && <CommentsSection comments = {subject.comments}/>}
    </div>
  );
};

const SubjectDetailContent = styled(SubjectDetailContentWrapper)`
    /* border: 1px solid purple; */
    display: flex;
    flex-direction: column;

    align-items: center;
    margin: 0 34px 0 34px;
`;

SubjectDetailContent.propTypes = {
  secondary: PropTypes.bool,
  subject: PropTypes.shape({
    id: PropTypes.string.isRequired,
    createdBy: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subjectContent: PropTypes.string.isRequired,
    subjectImage: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.object.isRequired
    ),
    timePassed: PropTypes.string.isRequired
  })
};


export default SubjectDetailContent;