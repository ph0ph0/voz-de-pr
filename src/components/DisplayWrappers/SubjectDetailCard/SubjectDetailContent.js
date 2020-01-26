import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import DetailHeader from "./DetailHeader/DetailHeader";
import DetailImage from "../../Primitive/SubjectDetail/DetailImage/DetailImage";
import DetailSummary from "./DetailSummary/DetailSummary";
import DetailBody from "./DetailBody/DetailBody";
import CommentsSection from "./CommentsSection/CommentsSection";
import LoadingSpinner from "components/Primitive/General/LoadingSpinner";

const SubjectDetailContentWrapper = ({ api, secondary, ...props }) => {
  return (
    <div {...props}>
      <DetailHeader secondary={secondary} api={api} />
      {api.pictureLoading ? (
        <LoadingSpinner />
      ) : (
        api.pictureURL && <DetailImage src={api.pictureURL} />
      )}
      <DetailSummary secondary={secondary} api={api} />
      <DetailBody secondary={secondary} api={api} />
      {api.comments && <CommentsSection api={api} secondary={secondary} />}
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

// SubjectDetailContent.propTypes = {
//   secondary: PropTypes.bool,
//   subject: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     createdBy: PropTypes.string.isRequired,
//     createdAt: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     subjectContent: PropTypes.string.isRequired,
//     subjectImage: PropTypes.string.isRequired,
//     votes: PropTypes.number.isRequired,
//     type: PropTypes.string.isRequired,
//     comments: PropTypes.arrayOf(PropTypes.object.isRequired),
//     timePassed: PropTypes.string.isRequired
//   })
// };

export default SubjectDetailContent;
