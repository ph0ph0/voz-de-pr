import React from "react";
import styled from "styled-components";

import NameTimeAgo from "../../../../Primitive/SubjectCard/NameTimeAgo";
import ProfPicSubjectCard from "../../../SubjectCard/LeftContent/ProfPicSubjectCard";

import { parseTime } from "Utils/TimePassedCalculator";
import DeleteButton from "components/Primitive/SubjectCard/DeleteSubjectButton";

const DetailHeaderTopLineWrapper = ({ api, ...props }) => {
  const timePassed = parseTime(api.subject.createdAt);

  const isOwner =
    api.user && api.user.id === api.subject.createdBy ? true : false;

  return (
    <div {...props}>
      <ProfPicSubjectCard createdBy={api.subject.createdBy} />
      <NameTimeAgo>{api.subject.author}</NameTimeAgo>
      <NameTimeAgo isTimeAgo>{timePassed}</NameTimeAgo>
      {isOwner && (
        <DeleteButton onClick={() => api.deleteSubject(api.subjectId)} />
      )}
    </div>
  );
};

const DetailHeaderTopLine = styled(DetailHeaderTopLineWrapper)`
  /* background-color: orange; */
  /* border: 1px solid olive; */
  width: 100%;
  height: 24px;

  margin-top: 25px;

  display: flex;
  place-content: flex-start;
`;

export default DetailHeaderTopLine;
