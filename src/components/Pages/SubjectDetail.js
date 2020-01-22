import React, { useState, useEffect } from "react";
import styled from "styled-components";

import SubjectDetailPageContent from "../PageContentWrappers/DetailPages/DetailPageContent";
import LoadingSpinner from "components/Primitive/General/LoadingSpinner";

import { SubjectsMixed } from "../../Constants/MockSubjectsData";

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
      window.log(
        `*************************Got downloaded subject data: ${JSON.stringify(
          result
        )}`
      );
      const subject = result.data.getSubject;
      window.log(`!!!!!!!!!!!!!!!!!Got subject: ${JSON.stringify(subject)}`);
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

  window.log(`&&&&&&&&&&LOADING????: ${loading}`);
  window.log(`&&&&&&&&&&SUBJECT: ${JSON.stringify(subject)}`);

  return (
    <div {...props}>
      {loading && subject === null ? (
        <LoadingSpinnerDetail />
      ) : !loading && subject === null ? (
        <NoSubjectsText>
          Subject not found, it either no longer exists or was recently deleted
        </NoSubjectsText>
      ) : (
        <SubjectDetailPageContent subject={subject} secondary={isSecondary} />
      )}
    </div>
  );
});

const NoSubjectsText = styled.p`
  margin-top: 200px;
  font-size: 20px;
`;

const LoadingSpinnerDetail = styled(LoadingSpinner)`
  margin-top: 300px;
`;

const SubjectDetailPage = styled(SubjectDetailPageWrapper)`
  /* border: 1px solid orange; */

  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export default SubjectDetailPage;
