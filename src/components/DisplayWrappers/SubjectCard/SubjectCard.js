import React from "react";
import styled from "styled-components";

import LeftContent from "./LeftContent/LeftContent";
import RightContent from "./RightContent/RightContent";

const Wrapper = ({ subject, secondary, ...props }) => {
  return (
    <div {...props}>
      <LeftContent subject={subject} />
      <RightContent secondary={secondary} subject={subject} />
    </div>
  );
};

const SubjectCard = styled(Wrapper)`
  /* border: 1px solid black; */
  width: 738px;
  height: 178px;

  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);

  display: flex;

  box-sizing: border-box;

  & + & {
    margin-top: 15px;
  }

  /* Ensures that there is a spacing beneath the last subejct card */
  :last-of-type {
    margin-bottom: 20px;
  }

  :hover {
    cursor: pointer;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.12);
  }
`;

export default SubjectCard;
