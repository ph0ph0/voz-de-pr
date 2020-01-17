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
  const [data, setData] = useState([]);

  //Can be all, mostVotes, mostComments, myCauses, myPosts, myAll
  const [sortOrderState, setSortOrderState] = useState("all");

  const {
    listAllSubjectsOrderedByCreatedAt,
    listAllSubjectsOrderedByVotes,
    listAllSubjectsOrderedByComments,
    loading
  } = useSubject();

  const { shouldSearch, updateShouldSearch, searchTerm } = useSearch();

  const updateSortOrderState = newValue => {
    window.log(`new filter state: ${newValue}`);
    setSubjectCardData([]);
    setNextToken(() => null);
    setSortOrderState(newValue);
  };

  const { user } = useUser();
  const userId = user && user.id;

  const queryConstructor = (pageFilter, sortOrder, nextToken, searchTerm) => {
    const titleSearchObject = searchTerm
      ? { title: { contains: searchTerm } }
      : null;

    const mainFeedFilter = Object.assign(
      {},
      titleSearchObject ? titleSearchObject : null
    );

    const causeOnlyFilter = Object.assign(
      {},
      {
        type: { eq: "cause" },
        title: titleSearchObject
      }
    );

    const postOnlyFilter = Object.assign(
      {},
      {
        type: { eq: "post" },
        title: titleSearchObject
      }
    );

    const myAllFilter = Object.assign(
      {},
      {
        createdBy: { eq: userId },
        title: titleSearchObject
      }
    );

    const myCausesFilter = Object.assign(
      {},
      {
        createdBy: { eq: userId },
        type: { eq: "cause" },
        title: titleSearchObject
      }
    );

    const myPostsFilter = Object.assign(
      {},
      {
        createdBy: { eq: userId },
        type: { eq: "post" },
        title: titleSearchObject
      }
    );

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
        return listAllSubjectsOrderedByCreatedAt({
          nextToken: nextToken,
          filter: mainFeedFilter
        });
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

  //Search when the user hits enter in the search bar
  // window.log(`***nextToken in compo: ${nextToken}`);

  //Null nextToken when search initiated
  // useEffect(() => {

  // }, [shouldSearch]);

  useEffect(() => {
    window.log(`nextToken is not null: ${!!nextToken}`);

    let isMounted = true;

    window.log(`search was initiated: ${shouldSearch}`);
    setNextToken(null);

    if (shouldSearch && nextToken == null) {
      window.log("Starting search...");
      (async function searchSubjects() {
        try {
          if (shouldSearch) {
            window.log("searching subjects...");
            window.log(`Next token after nulling in search: ${nextToken}`);
            if (!isMounted) return;
            const data = await queryConstructor(
              pageFilter,
              sortOrderState,
              nextToken,
              searchTerm
            );
            const subjects = data.subjects;
            const token = data.nextToken;
            setSubjectCardData(() => [...subjects]);
            // window.log(`newSubjects array: ${JSON.stringify(subjectCardData)}`);
            setNextToken(() => token);
            window.log(`NEXT TOKEN: ${nextToken}`);
            updateShouldSearch(false);
          }
        } catch (error) {
          window.log(`Error searching on submit in search bar: ${error}`);
        }
      })();
    }
    return () => (isMounted = false);
  }, [shouldSearch, nextToken]);

  // window.log(`&&&&Should search in fucking comp: ${shouldSearch}`);
  // window.log(`&&&&next token in fucking comp: ${!!nextToken}`);

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
        <p>subjectCardData is empty</p>
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
