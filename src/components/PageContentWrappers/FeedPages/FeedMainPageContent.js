//MainPageContent houses the Title/Filters (TopOfPage) and the SubjectCards in a column flex box.

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { useSubject } from "CustomHooks/useSubject";

import TopOfPage from "../TopOfPage/TopOfPage";
import SubjectCards from "components/DisplayWrappers/SubjectCards/SubjectCards";
import LoadingSpinner from "components/Primitive/General/LoadingSpinner";
import LoadMore from "components/Primitive/SubjectCard/LoadMore";

import { useUser } from "CustomHooks/user";
import { useSearch } from "CustomHooks/useSearch";
const FeedMainPageContentWrapper = ({
  pageTitle,
  profileType,
  pageFilter,
  ...props
}) => {
  // pageFilter can be mixed, causeOnly, postsOnly or profile

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

  const {
    shouldSearch,
    updateShouldSearch,
    searchTerm,
    updateSearchText
  } = useSearch();

  const updateSortOrderState = newValue => {
    window.log(`new filter state: ${newValue}`);
    if (newValue === sortOrderState) {
      window.log("sortOrderState was the same, aborting");
      return;
    }
    setSubjectCardData([]);
    setNextToken(null);
    updateSearchText("");
    setSortOrderState(newValue);
  };

  const { user } = useUser();
  const userId = user && user.id;

  const queryConstructor = (
    pageFilter,
    sortOrder,
    nextToken,
    searchTerm,
    limit
  ) => {
    window.log(`Search term passed to queryConstructor: ${searchTerm}`);
    const searchObject = searchTerm
      ? {
          contains: searchTerm
            .trim()
            .toLowerCase()
            .replace(/ /g, "")
        }
      : null;

    const mainFeedFilter = Object.assign(
      {},
      { searchField: searchObject ? searchObject : null }
    );

    const causeOnlyFilter = Object.assign(
      {},
      {
        type: { eq: "cause" },
        searchField: searchObject ? searchObject : null
      }
    );

    const postOnlyFilter = Object.assign(
      {},
      {
        type: { eq: "post" },
        searchField: searchObject ? searchObject : null
      }
    );

    const myAllFilter = Object.assign(
      {},
      {
        createdBy: { eq: userId },
        searchField: searchObject ? searchObject : null
      }
    );

    const myCausesFilter = Object.assign(
      {},
      {
        createdBy: { eq: userId },
        type: { eq: "cause" },
        searchField: searchObject ? searchObject : null
      }
    );

    const myPostsFilter = Object.assign(
      {},
      {
        createdBy: { eq: userId },
        type: { eq: "post" },
        searchField: searchObject ? searchObject : null
      }
    );

    window.log(`nextToken passed to queryConstructor: ${nextToken}`);

    switch (true) {
      case sortOrder === "all" && pageFilter === "CauseOnly":
        window.log("sO=all, pF=cO");
        return listAllSubjectsOrderedByCreatedAt({
          filter: causeOnlyFilter,
          nextToken,
          limit
        });
      case sortOrder === "all" && pageFilter === "PostOnly":
        window.log("sO=all, pF=pO");
        return listAllSubjectsOrderedByCreatedAt({
          filter: postOnlyFilter,
          nextToken: nextToken,
          limit
        });
      case sortOrder === "all" && pageFilter === "Mixed":
        window.log("sO=all, pF=M");
        return listAllSubjectsOrderedByCreatedAt({
          nextToken: nextToken,
          filter: mainFeedFilter,
          limit
        });
      case sortOrder === "mostVotes" && pageFilter === "CauseOnly":
        window.log("sO=mostVotes, pF=cO");
        return listAllSubjectsOrderedByVotes({
          filter: causeOnlyFilter,
          nextToken: nextToken,
          limit
        });
      case sortOrder === "mostVotes" && pageFilter === "PostOnly":
        window.log("sO=mostVotes, pF=pO");
        return listAllSubjectsOrderedByVotes({
          filter: postOnlyFilter,
          nextToken: nextToken,
          limit
        });
      case sortOrder === "mostVotes" && pageFilter === "Mixed":
        window.log("sO=mostVotes, pF=M");
        return listAllSubjectsOrderedByVotes({
          nextToken: nextToken,
          filter: mainFeedFilter,
          limit
        });
      case sortOrder === "mostComments" && pageFilter === "CauseOnly":
        window.log("sO=mostComments, pF=cO");
        return listAllSubjectsOrderedByComments({
          filter: causeOnlyFilter,
          nextToken: nextToken,
          limit
        });
      case sortOrder === "mostComments" && pageFilter === "PostOnly":
        window.log("sO=mostComments, pF=pO");
        return listAllSubjectsOrderedByComments({
          filter: postOnlyFilter,
          nextToken: nextToken,
          limit
        });
      case sortOrder === "mostComments" && pageFilter === "Mixed":
        window.log("sO=mostComments, pF=M");
        return listAllSubjectsOrderedByComments({
          nextToken: nextToken,
          filter: mainFeedFilter,
          limit
        });
      case sortOrder === "all" && pageFilter === "Profile":
        window.log("sO=myAll, pF=Prof");
        return listAllSubjectsOrderedByCreatedAt({
          filter: myAllFilter,
          nextToken: nextToken,
          limit
        });
      case sortOrder === "myCauses" && pageFilter === "Profile":
        window.log("sO=myCauses, pF=Prof");
        return listAllSubjectsOrderedByCreatedAt({
          filter: myCausesFilter,
          nextToken: nextToken,
          limit
        });
      case sortOrder === "myPosts" && pageFilter === "Profile":
        window.log("sO=myPosts, pF=Prof");
        return listAllSubjectsOrderedByCreatedAt({
          filter: myPostsFilter,
          nextToken: nextToken,
          limit
        });
      default:
        window.log("default sO=all, pF=M");
        return listAllSubjectsOrderedByCreatedAt({ nextToken: nextToken });
    }
  };

  //Get subjects on mount, or when the sortOrder changes
  useEffect(() => {
    let isMounted = true;

    window.log("Getting subjects on mount or when sO changes");

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
        setSubjectCardData(() => [...subjects]);
        setNextToken(() => nextToken);
      } catch (error) {
        window.log(`Error getting subjects on mount: ${error}`);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, [sortOrderState]);

  //Search useEffect
  useEffect(() => {
    window.log(`nextToken?: ${!!nextToken}`);

    let isMounted = true;

    //First null the nextToken, as we dont want to send this with the search query
    //By nulling it, this useEffect will be called again, as it watches nextToken.
    //Also null subjects
    if (shouldSearch) {
      window.log("nulling token in useEffect");
      setNextToken(null);
      setSubjectCardData([]);
    }

    //When called the second time, shouldSearch will be true, nextToken will be null
    if (shouldSearch && nextToken == null) {
      window.log("Starting search...");
      (async function searchSubjects() {
        try {
          if (shouldSearch) {
            window.log("searching subjects...");

            //Set a high limit, as limit applied before filter in dDB (see dev notes)
            const limit = 100000;

            if (!isMounted) return;
            const data = await queryConstructor(
              pageFilter,
              sortOrderState,
              nextToken,
              searchTerm,
              limit
            );
            const subjects = data.subjects;
            const token = data.nextToken;
            setSubjectCardData(subjects);
            setNextToken(token);
            updateShouldSearch(false);
          }
        } catch (error) {
          window.log(`Error searching on submit in search bar: ${error}`);
        }
      })();
    }
    return () => (isMounted = false);
  }, [nextToken, shouldSearch]);

  const getMoreSubjects = async nextToken => {
    window.log(`Getting MORE subjects with nextToken: ${nextToken}`);
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
      setNextToken(() => token);
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
      {subjectCardData.length === 0 && !loading ? (
        <NoResults>No results found...</NoResults>
      ) : (
        <SubjectCards arrayOfSubjectCardData={subjectCardData} />
      )}
      {loading && <LoadingSpinner colour="#1B4EA0" center={true} />}
      {nextToken && (
        <LoadMore onClick={() => getMoreSubjects(nextToken)}>
          Load More
        </LoadMore>
      )}
    </div>
  );
};

const NoResults = styled.p`
  margin-left: auto;
  margin-right: auto;
  color: #919191;
  font-size: 16px;
`;

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
