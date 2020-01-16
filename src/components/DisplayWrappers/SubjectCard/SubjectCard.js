import React from "react";
import styled from "styled-components";

import LeftContent from "./LeftContent/LeftContent";
import RightContent from "./RightContent/RightContent";

import { useUser } from "CustomHooks/user";

const Wrapper = ({
  author,
  createdBy,
  createdAt,
  title,
  subjectContent,
  numberOfComments,
  numberOfVotes,
  secondary,
  pictures,
  ...props
}) => {
  const { user } = useUser();
  const isOwner = user && user.id === createdBy ? true : false;

  const leftProps = {
    author,
    createdAt,
    createdBy,
    title,
    subjectContent,
    numberOfComments,
    isOwner
  };
  const rightProps = { numberOfVotes, secondary, pictures };

  return (
    <div {...props}>
      <LeftContent {...leftProps} />
      <RightContent {...rightProps} />
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
