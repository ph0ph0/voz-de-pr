import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { SubjectPropTypes } from "Constants/__PropTypes__/SubjectPropTypes";

import SubjectCardTopLineWrapper from "./SubjectCardTopLineWrapper";
import SubjectTitle from "../../../Primitive/SubjectCard/SubjectTitle";
import SubjectSummary from "../../../Primitive/SubjectCard/SubjectSummary";
import BottomWrapper from "./BottomWrapper";

import { parseTime } from "Utils/TimePassedCalculator";
import { useUser } from "CustomHooks/user";

const Wrapper = ({ subject, ...props }) => {
  const timeSinceCreated = parseTime(subject.createdAt);
  // const numberOfComments =
  //   subject.comments && subject.comments.items && subject.comments.items.length;

  const { user } = useUser();

  const isOwner = user && user.id === subject.createdBy ? true : false;

  return (
    <div {...props}>
      <SubjectCardTopLineWrapper
        author={subject.author}
        timePassed={timeSinceCreated}
        isOwner={isOwner}
        createdBy={subject.createdBy}
      />
      <SubjectTitle>{subject.title}</SubjectTitle>
      <SubjectSummary>{subject.subjectContent}</SubjectSummary>
      <BottomWrapper numberOfComments={subject.numberOfComments} />
    </div>
  );
};

const LeftContent = styled(Wrapper)`
  /* border: 1px solid gold; */
  height: 100%;
  width: 100%;
  margin-left: 24px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

LeftContent.propTypes = SubjectPropTypes;

export default LeftContent;
