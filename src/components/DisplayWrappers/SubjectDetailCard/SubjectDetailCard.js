import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import SubjectDetailContent from "./SubjectDetailContent";

import { Helmet } from "react-helmet";

const SubjectDetailWrapper = ({ api, secondary, ...props }) => {
  const title = "Voz de Puerto Rico | ".concat(api.subject.title);
  const description = api.subject.subjectContent;
  const url = "https://www.vozdepuertorico.com/".concat(api.subjectId);
  return (
    <div {...props}>
      <Helmet>
        <title>{title}</title>
        <meta property="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={api.pictureURL} />
        <meta property="og:url" content={url} />
      </Helmet>
      <SubjectDetailContent api={api} secondary={secondary} />
    </div>
  );
};

const SubjectDetailCard = styled(SubjectDetailWrapper)`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;

  width: 738px;
  height: auto;

  margin: 0px;
  margin-right: 30px;
  padding: 0px;
  padding-bottom: 20px;

  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);
`;

SubjectDetailCard.propTypes = {
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
    comments: PropTypes.arrayOf(PropTypes.object.isRequired),
    timePassed: PropTypes.string.isRequired,
  }),
};

export default SubjectDetailCard;
