//MainPageContent houses the Title/Filters (TopOfPage) and the SubjectCards in a column flex box.

import React, { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import TopOfPage from "../TopOfPage/TopOfPage";
import SubjectCards from "components/DisplayWrappers/SubjectCards/SubjectCards";
import LoadingSpinner from "components/Primitive/General/LoadingSpinner";
import LoadMore from "components/Primitive/SubjectCard/LoadMore";

const FeedMainPageContentWrapper = ({
  pageTitle,
  profileType,
  pageFilter,
  api,
  ...props
}) => {
  // pageFilter can be mixed, causeOnly, postsOnly or profile

  window.log(
    `!*!*!*!**!*!*!*!*!*After useAPI, sCD, nT, sOS: ${api.subjectCardData}, ${api.nextToken}, ${api.sortOrderState}`
  );

  //Get subjects on mount, or when the sortOrder changes
  useEffect(() => {
    let isMounted = true;

    window.log("Getting subjects on mount or when sO changes");

    (async function getAllSubjects() {
      window.log(`********PAGE FILTER: ${pageFilter}`);
      window.log(`********sortOrderState: ${api.sortOrderState}`);

      try {
        const data = await api.queryConstructor(pageFilter, api.sortOrderState);
        const subjects = data.subjects;
        const nextToken = data.nextToken;

        if (!isMounted) {
          window.log("Component not mounted, aborting setting subjects");
          return;
        }
        api.setSubjectResponse(subjects, nextToken);
      } catch (error) {
        window.log(`Error getting subjects on mount: ${error}`);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, [api.sortOrderState]);

  //Search useEffect
  useEffect(() => {
    window.log(`nextToken?: ${!!api.nextToken}`);

    let isMounted = true;

    //First null the nextToken, as we dont want to send this with the search query
    //By nulling it, this useEffect will be called again, as it watches nextToken.
    //Also null subjects
    if (api.shouldSearch) {
      window.log("nulling token in useEffect");
      api.setSubjectResponse([], null);
    }

    //When called the second time, shouldSearch will be true, nextToken will be null
    if (api.shouldSearch && api.nextToken == null) {
      window.log("Starting search...");
      (async function searchSubjects() {
        try {
          if (api.shouldSearch) {
            window.log("searching subjects...");

            //Set a high limit, as limit applied before filter in dDB (see dev notes)
            const limit = 100000;

            if (!isMounted) return;
            await api.queryConstructor(pageFilter, limit);
            window.log("Search done!");
          }
        } catch (error) {
          window.log(`Error searching on submit in search bar: ${error}`);
        }
      })();
    }
    return () => (isMounted = false);
  }, [api.nextToken, api.shouldSearch]);

  const getMoreSubjects = async nextToken => {
    window.log(`Getting MORE subjects with nextToken: ${nextToken}`);
    try {
      const data = await api.queryConstructor(pageFilter, nextToken);
      const subjects = data.subjects;
      const token = data.nextToken;
      api.setSubjectResponse([...api.subjectCardData, ...subjects], token);
      window.log(`newSubjects array: ${JSON.stringify(api.subjectCardData)}`);
    } catch (error) {
      window.log(`Error getting more subjects: ${error}`);
    }
  };

  window.log(
    `!*!*!*!**!*!*!*!*!*sCD, nT, sOS before return components: ${api.subjectCardData}, ${api.nextToken}, ${api.sortOrderState}`
  );
  return (
    <div {...props}>
      <TopOfPage
        profileType={profileType}
        shouldShowFilters={true}
        updateSortOrderState={api.updateSortOrderState}
        sortOrderState={api.sortOrderState}
      >
        {pageTitle}
      </TopOfPage>
      <SubjectCards arrayOfSubjectCardData={api.subjectCardData} />
      {/* {api.subjectCardData &&
      api.subjectCardData.length === 0 &&
      !api.loading ? (
        <p>subjectCardData is empty</p>
      ) : (
        <SubjectCards arrayOfSubjectCardData={api.subjectCardData} />
      )} */}
      {api.loading && <LoadingSpinner colour="#1B4EA0" center={true} />}
      {api.nextToken && (
        <LoadMore onClick={() => getMoreSubjects(api.nextToken)}>
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
