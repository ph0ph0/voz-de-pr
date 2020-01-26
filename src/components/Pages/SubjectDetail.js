import React, { useState, useEffect } from "react";
import styled from "styled-components";

import SubjectDetailPageContent from "../PageContentWrappers/DetailPages/DetailPageContent";
import LoadingSpinner from "components/Primitive/General/LoadingSpinner";
import { ReactComponent as LogoSVG } from "assets/SignUpInCard/SignUpInLogo.svg";

import { withRouter } from "react-router-dom";

import useAPI from "CustomHooks/useAPI";
import SubjectDetailAPI from "components/DisplayWrappers/SubjectDetailCard/API/SubjectDetailContentAPI";

export const fetchSubject = subjectID => {
  window.log(`fetching subject for subjectDetail: ${subjectID}`);
};

const SubjectDetailPageWrapper = withRouter(({ staticContext, ...props }) => {
  //DONT FORGET TO PASS THE subjectId from props into the state!
  const subjectId = props.match.params.subjectId;

  const api = useAPI(SubjectDetailAPI, {
    commentText: "",
    commentError: "",
    comments: [],
    pictureURL: null,
    subject: null,
    subjectId: subjectId,
    isSecondary: false,
    currentVoteOnSubject: null
  });

  return (
    <div {...props}>
      {api.subjectLoading && api.subject === null ? (
        <LoadingSpinnerDetail colour={"#1B4EA0"} />
      ) : !api.subjectLoading && api.subject === null ? (
        <SubjectNotFound />
      ) : (
        api.subject && (
          <SubjectDetailPageContent api={api} secondary={api.isSecondary} />
        )
      )}
    </div>
  );
});

const SubjectNotFoundWrapper = ({ ...props }) => {
  return (
    <div {...props}>
      <Logo />
      <NoSubjectsText>
        Subject not found, it either no longer exists or was recently deleted
      </NoSubjectsText>
    </div>
  );
};

const SubjectNotFound = styled(SubjectNotFoundWrapper)`
  /* border: 1px solid black; */
  margin-top: 70px;
  display: flex;
  flex-direction: column;
`;

const Logo = styled(LogoSVG)`
  /* border: 1px solid orange; */
  width: 100px;
  height: 100px;

  margin-left: auto;
  margin-right: auto;
`;

const NoSubjectsText = styled.p`
  margin-top: 20px;
  font-size: 20px;
  color: #919191;
`;

const LoadingSpinnerDetail = styled(LoadingSpinner)`
  margin-top: 20px;
`;

const SubjectDetailPage = styled(SubjectDetailPageWrapper)`
  /* border: 1px solid orange; */

  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export default SubjectDetailPage;
