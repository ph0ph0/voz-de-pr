import React, { useState, useEffect } from "react";
import styled from "styled-components";

import SubjectDetailPageContent from "../PageContentWrappers/DetailPages/DetailPageContent";

import { SubjectsMixed } from "../../Constants/MockSubjectsData";

import { withRouter } from "react-router-dom";

import { useSubject } from "CustomHooks/useSubject";

export const fetchSubject = subjectID => {
  window.log(`fetching subject for subjectDetail: ${subjectID}`);
};

const SubjectDetailPageWrapper = withRouter(({ staticContext, ...props }) => {
  const { downloadSubject, loading, error } = useSubject();
  const [subject, setSubject] = useState(null);

  useEffect(() => {
    let isMounted = true;

    (async function fetchSubject() {
      const subjectId = props.match.params.subjectId;
      window.log(`Received this subjectId from url: ${subjectId}`);

      const data = await downloadSubject(subjectId);
      window.log(`Got downloaded subject data: ${data}`);
      const subject = "";
      if (!isMounted) {
        window.log(
          "Subject detail was no longer mounted, aborting setting state"
        );
        return;
      }
      setSubject(subject);
    })();

    return () => (isMounted = false);
  }, []);

  //secondary here determines which side panel should be shown; the post one or the cause one.
  const secondary = subject.type && subject.type === "post" ? true : false;

  return (
    <div {...props}>
      <SubjectDetailPageContent subject={subject} secondary={secondary} />
    </div>
  );
});

const SubjectDetailPage = styled(SubjectDetailPageWrapper)`
  /* border: 1px solid orange; */

  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export default SubjectDetailPage;
