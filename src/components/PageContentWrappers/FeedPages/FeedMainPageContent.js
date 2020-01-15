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
import { useUser } from "CustomHooks/user";

const getSubjectCards = pageFilter => {
  switch (pageFilter) {
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
  pageFilter,
  ...props
}) => {
  // const subjectCardData = getSubjectCards(queryType);

  const [subjectCardData, setSubjectCardData] = useState([]);
  const [nextToken, setNextToken] = useState(null);

  //Can be all, mostVotes, mostComments, myCauses, myPosts, myAll
  const [sortOrderState, setSortOrderState] = useState("all");

  const {
    listAllSubjectsOrderedByCreatedAt,
    listAllSubjectsOrderedByVotes,
    listAllSubjectsOrderedByComments,
    loading
  } = useSubject();

  const updateSortOrderState = newValue => {
    window.log(`new filter state: ${newValue}`);
    setSortOrderState(newValue);
  };

  const { user } = useUser();
  const userId = user && user.id;

  const queryConstructor = (pageFilter, sortOrder) => {
    const causeOnlyFilter = { type: { eq: "cause" } };
    const postOnlyFilter = { type: { eq: "post" } };
    const myAllFilter = {
      createdBy: {
        eq: userId
      }
    };
    const myCausesFilter = {
      createdBy: {
        eq: userId
      },
      type: {
        eq: "cause"
      }
    };
    const myPostsFilter = {
      createdBy: { eq: userId },
      type: {
        eq: "post"
      }
    };

    switch (true) {
      case sortOrder === "all" && pageFilter === "CauseOnly":
        window.log("sO=all, pF=cO");
        return listAllSubjectsOrderedByCreatedAt({ filter: causeOnlyFilter });
      case sortOrder === "all" && pageFilter === "PostOnly":
        window.log("sO=all, pF=pO");
        return listAllSubjectsOrderedByCreatedAt({ filter: postOnlyFilter });
      case sortOrder === "all" && pageFilter === "Mixed":
        window.log("sO=all, pF=M");
        return listAllSubjectsOrderedByCreatedAt();
      case sortOrder === "mostVotes" && pageFilter === "CauseOnly":
        window.log("sO=mostVotes, pF=cO");
        return listAllSubjectsOrderedByVotes({ filter: causeOnlyFilter });
      case sortOrder === "mostVotes" && pageFilter === "PostOnly":
        window.log("sO=mostVotes, pF=pO");
        return listAllSubjectsOrderedByVotes({ filter: postOnlyFilter });
      case sortOrder === "mostVotes" && pageFilter === "Mixed":
        window.log("sO=mostVotes, pF=M");
        return listAllSubjectsOrderedByVotes();
      case sortOrder === "mostComments" && pageFilter === "CauseOnly":
        window.log("sO=mostComments, pF=cO");
        return listAllSubjectsOrderedByComments({ filter: causeOnlyFilter });
      case sortOrder === "mostComments" && pageFilter === "PostOnly":
        window.log("sO=mostComments, pF=pO");
        return listAllSubjectsOrderedByComments({ filter: postOnlyFilter });
      case sortOrder === "mostComments" && pageFilter === "Mixed":
        window.log("sO=mostComments, pF=M");
        return listAllSubjectsOrderedByComments();
      case sortOrder === "all" && pageFilter === "Profile":
        window.log("sO=myAll, pF=Prof");
        return listAllSubjectsOrderedByCreatedAt({ filter: myAllFilter });
      case sortOrder === "myCauses" && pageFilter === "Profile":
        window.log("sO=myCauses, pF=Prof");
        return listAllSubjectsOrderedByCreatedAt({ filter: myCausesFilter });
      case sortOrder === "myPosts" && pageFilter === "Profile":
        window.log("sO=myPosts, pF=Prof");
        return listAllSubjectsOrderedByCreatedAt({ filter: myPostsFilter });
      default:
        window.log("default sO=all, pF=M");
        return listAllSubjectsOrderedByCreatedAt();
    }
  };

  useEffect(() => {
    let isMounted = true;

    (async function getAllSubjects() {
      window.log(`********PAGE FILTER: ${pageFilter}`);
      window.log(`********sortOrderState: ${sortOrderState}`);
      const subjects = await queryConstructor(pageFilter, sortOrderState);

      if (!isMounted) {
        window.log("Component not mounted, aborting setting subjects");
        return;
      }
      setSubjectCardData(subjects);
    })();
    return () => {
      isMounted = false;
    };
  }, [sortOrderState]);

  //maybe another useEffect to watch the sortOrderState?

  return (
    <div {...props}>
      <TopOfPage
        profileType={profileType}
        shouldShowFilters={true}
        updateSortOrderState={updateSortOrderState}
        sortOrderState={sortOrderState}
      >
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
