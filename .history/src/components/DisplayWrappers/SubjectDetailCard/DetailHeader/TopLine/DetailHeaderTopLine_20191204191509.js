import React from "react";
import styled from "styled-components";

import NameTimeAgo from "../../../../Primitive/SubjectCard/NameTimeAgo";
import ProfPicSubjectCard from "../../../SubjectCard/LeftContent/ProfPicSubjectCard";

const DetailHeaderTopLineWrapper = ({...props}) => {
  return (
    <div {...props}>
      <ProfPicSubjectCard/>
      <NameTimeAgo>James Montgommery Wheeler Mcguiness</NameTimeAgo>
      <NameTimeAgo isTimeAgo>1 hour ago</NameTimeAgo>
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