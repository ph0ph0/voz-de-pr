import React, { useState, useEffect } from "react";
import styled from "styled-components";

import SubjectDetailPageContent from "../PageContentWrappers/DetailPages/DetailPageContent";
import LoadingSpinner from "components/Primitive/General/LoadingSpinner";
import { ReactComponent as LogoSVG } from "assets/SignUpInCard/SignUpInLogo.svg";

import { withRouter } from "react-router-dom";

import { useSubject } from "CustomHooks/useSubject";

export const fetchSubject = subjectID => {
  window.log(`fetching subject for subjectDetail: ${subjectID}`);
};

const SubjectDetailPageWrapper = withRouter(({ staticContext, ...props }) => {
  const { downloadSubject, loading, error } = useSubject();
  const [subject, setSubject] = useState(null);
  //if isSecondary is true, show Post config, if false, Cause config
  const [isSecondary, setIsSecondary] = useState(false);

  useEffect(() => {
    let isMounted = true;
    window.log(`Loading SubjectDetail`);
    (async function fetchSubject() {
      const subjectId = props.match.params.subjectId;
      window.log(`Received this subjectId from url: ${subjectId}`);

      const result = await downloadSubject(subjectId);
      const subject = result.data.getSubject;
      window.log(`Got subject: ${JSON.stringify(subject)}`);
      if (!isMounted) {
        window.log(
          "Subject detail was no longer mounted, aborting setting state"
        );
        return;
      }
      setSubject(subject);
      if (subject !== null) {
        //secondary here determines which side panel should be shown; the post one or the cause one.
        const secondary =
          subject.type && subject.type === "post" ? true : false;
        setIsSecondary(secondary);
      }
    })();

    return () => (isMounted = false);
  }, []);

  return (
    <div {...props}>
      {loading && subject === null ? (
        <LoadingSpinnerDetail colour={"#1B4EA0"} />
      ) : !loading && subject === null ? (
        <SubjectNotFound />
      ) : (
        <SubjectDetailPageContent subject={subject} secondary={isSecondary} />
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
