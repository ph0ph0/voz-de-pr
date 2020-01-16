//MainPageContent houses the Title/Filters (TopOfPage) and the SubjectCards in a column flex box.

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { useSubject } from "CustomHooks/useSubject";

import TopOfPage from "../TopOfPage/TopOfPage";
import SubjectCards from "components/DisplayWrappers/SubjectCards/SubjectCards";
import LoadingSpinner from "components/Primitive/General/LoadingSpinner";
import { useUser } from "CustomHooks/user";

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

  const queryConstructor = (pageFilter, sortOrder, nextToken) => {
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

    window.log(`nextToken passed to queryConstructor: ${nextToken}`);

    switch (true) {
      case sortOrder === "all" && pageFilter === "CauseOnly":
        window.log("sO=all, pF=cO");
        return listAllSubjectsOrderedByCreatedAt({
          filter: causeOnlyFilter,
          nextToken
        });
      case sortOrder === "all" && pageFilter === "PostOnly":
        window.log("sO=all, pF=pO");
        return listAllSubjectsOrderedByCreatedAt({
          filter: postOnlyFilter,
          nextToken: nextToken
        });
      case sortOrder === "all" && pageFilter === "Mixed":
        window.log("sO=all, pF=M");
        return listAllSubjectsOrderedByCreatedAt({ nextToken: nextToken });
      case sortOrder === "mostVotes" && pageFilter === "CauseOnly":
        window.log("sO=mostVotes, pF=cO");
        return listAllSubjectsOrderedByVotes({
          filter: causeOnlyFilter,
          nextToken: nextToken
        });
      case sortOrder === "mostVotes" && pageFilter === "PostOnly":
        window.log("sO=mostVotes, pF=pO");
        return listAllSubjectsOrderedByVotes({
          filter: postOnlyFilter,
          nextToken: nextToken
        });
      case sortOrder === "mostVotes" && pageFilter === "Mixed":
        window.log("sO=mostVotes, pF=M");
        return listAllSubjectsOrderedByVotes({ nextToken: nextToken });
      case sortOrder === "mostComments" && pageFilter === "CauseOnly":
        window.log("sO=mostComments, pF=cO");
        return listAllSubjectsOrderedByComments({
          filter: causeOnlyFilter,
          nextToken: nextToken
        });
      case sortOrder === "mostComments" && pageFilter === "PostOnly":
        window.log("sO=mostComments, pF=pO");
        return listAllSubjectsOrderedByComments({
          filter: postOnlyFilter,
          nextToken: nextToken
        });
      case sortOrder === "mostComments" && pageFilter === "Mixed":
        window.log("sO=mostComments, pF=M");
        return listAllSubjectsOrderedByComments({ nextToken: nextToken });
      case sortOrder === "all" && pageFilter === "Profile":
        window.log("sO=myAll, pF=Prof");
        return listAllSubjectsOrderedByCreatedAt({
          filter: myAllFilter,
          nextToken: nextToken
        });
      case sortOrder === "myCauses" && pageFilter === "Profile":
        window.log("sO=myCauses, pF=Prof");
        return listAllSubjectsOrderedByCreatedAt({
          filter: myCausesFilter,
          nextToken: nextToken
        });
      case sortOrder === "myPosts" && pageFilter === "Profile":
        window.log("sO=myPosts, pF=Prof");
        return listAllSubjectsOrderedByCreatedAt({
          filter: myPostsFilter,
          nextToken: nextToken
        });
      default:
        window.log("default sO=all, pF=M");
        return listAllSubjectsOrderedByCreatedAt({ nextToken: nextToken });
    }
  };

  useEffect(() => {
    let isMounted = true;

    (async function getAllSubjects() {
      window.log(`********PAGE FILTER: ${pageFilter}`);
      window.log(`********sortOrderState: ${sortOrderState}`);

      try {
        const data = await queryConstructor(pageFilter, sortOrderState);
        const subjects = data.subjects;
        const nextToken = data.nextToken;

        if (!isMounted) {
          window.log("Component not mounted, aborting setting subjects");
          return;
        }
        setSubjectCardData(subjects);
        setNextToken(nextToken);
      } catch (error) {
        window.log(`Error getting subjects on mount: ${error}`);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, [sortOrderState]);

  //maybe another useEffect to watch the sortOrderState?

  const getMoreSubjects = async nextToken => {
    window.log(`Getting more subjects with nextToken: ${nextToken}`);
    try {
      const data = await queryConstructor(
        pageFilter,
        sortOrderState,
        nextToken
      );
      const subjects = data.subjects;
      const token = data.nextToken;
      setSubjectCardData(prevState => [...prevState, ...subjects]);
      window.log(`newSubjects array: ${JSON.stringify(subjectCardData)}`);
      setNextToken(token);
    } catch (error) {
      window.log(`Error getting more subjects: ${error}`);
    }
  };

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
      <SubjectCards arrayOfSubjectCardData={subjectCardData} />
      {loading && <LoadingSpinner colour="#1B4EA0" center={true} />}
      {nextToken && (
        <LoadMore onClick={() => getMoreSubjects(nextToken)}>
          Load More
        </LoadMore>
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

const LoadMore = styled.button`
  /* border: 1px solid black; */
  width: auto;
  height: 40px;
  border-radius: 40px;

  margin-top: 10px;
  margin-bottom: 40px;

  /* background-color: #919191; */
  color: rgba(0, 0, 0, 0.54);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);

  font-size: 16px;
  text-align: center;

  :focus {
    outline: none;
  }
`;

export default FeedMainPageContent;
