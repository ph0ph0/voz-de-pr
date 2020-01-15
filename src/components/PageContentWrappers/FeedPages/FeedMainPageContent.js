//MainPageContent houses the Title/Filters (TopOfPage) and the SubjectCards in a column flex box.

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { useSubject } from "CustomHooks/useSubject";

import TopOfPage from "../TopOfPage/TopOfPage";
import SubjectCards from "components/DisplayWrappers/SubjectCards/SubjectCards";
import {
  SubjectsMixed,
  CauseOnly,
  PostOnly,
  Profile
} from "Constants/MockSubjectsData";
import LoadingSpinner from "components/Primitive/General/LoadingSpinner";

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
  // const subjectCardData = getSubjectCards(queryType);

  const [subjectCardData, setSubjectCardData] = useState([]);
  const [nextToken, setNextToken] = useState(null);

  const {
    listAllSubjectsOrderedByCreatedAt,
    listAllSubjectsOrderedByVotes,
    listAllSubjectsOrderedByComments,
    loading
  } = useSubject();

  useEffect(() => {
    let isMounted = true;

    (async function getAllSubjects() {
      const subjects = await listAllSubjectsOrderedByComments();
      window.log(`Got subjects! pic1: ${subjects[0].pictures.items[0].key}`);
      if (!isMounted) {
        window.log("Component not mounted, aborting setting subjects");
        return;
      }
      setSubjectCardData(subjects);
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div {...props}>
      <TopOfPage profileType={profileType} shouldShowFilters={true}>
        {pageTitle}
      </TopOfPage>
      {loading ? (
        <LoadingSpinner colour="#1B4EA0" center={true} />
      ) : (
        <SubjectCards arrayOfSubjectCardData={subjectCardData} />
      )}
    </div>
  );
};

const FeedMainPageContent = styled(FeedMainPageContentWrapper)`
  /* border: 1px solid green; */
  /* background-color: red; */

  width: 739px;
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
