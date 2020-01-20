import React from "react";
import styled from "styled-components";

import NameTimeAgo from "../../../../Primitive/SubjectCard/NameTimeAgo";
import ProfPicSubjectCard from "../../../SubjectCard/LeftContent/ProfPicSubjectCard";

import { parseTime } from "Utils/TimePassedCalculator";

const DetailHeaderTopLineWrapper = ({ subject, ...props }) => {
  const timePassed = parseTime(subject.createdAt);

  return (
    <div {...props}>
      <ProfPicSubjectCard createdBy={subject.createdBy} />
      <NameTimeAgo>{subject.author}</NameTimeAgo>
      <NameTimeAgo isTimeAgo>{timePassed}</NameTimeAgo>
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
