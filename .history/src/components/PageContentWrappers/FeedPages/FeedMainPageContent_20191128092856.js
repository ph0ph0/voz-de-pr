//MainPageContent houses the Title/Filters (TopOfPage) and the SubjectCards in a column flex box.

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import TopOfPage from "../TopOfPage/TopOfPage";
import SubjectCards from "components/DisplayWrappers/SubjectCards/SubjectCards";
import {
  SubjectsMixed,
  CauseOnly,
  PostOnly,
  Profile
} from "Constants/MockSubjectsData";

const getSubjectCards = queryType => {
  switch (queryType) {
    case "CauseOnly":
      return CauseOnly;
    case "PostOnly":
      return PostOnly;
    case "Mixed":
      return SubjectsMixed;
    case "Profile":
      return Profile;
    default:
      return SubjectsMixed;
  }
};

const FeedMainPageContentWrapper = ({
  pageTitle,
  profileType,
  queryType,
  ...props
}) => {
  const subjectCardData = getSubjectCards(queryType);

  return (
    <div {...props}>
      <TopOfPage profileType={profileType} shouldShowFilters={true}>
        {pageTitle}
      </TopOfPage>
      <SubjectCards arrayOfSubjectCardData={subjectCardData} />
    </div>
  );
};

const FeedMainPageContent = styled(FeedMainPageContentWrapper)`
  /* border: 1px solid green; */
  /* background-color: red; */

  margin-right: 30px;
  padding-right: 0px;

  display: flex;
  flex-direction: column;
`;

FeedMainPageContent.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  profileType: PropTypes.bool.isRequired
};

export default FeedMainPageContent;