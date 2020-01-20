import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import SubjectContent from "components/Primitive/SubjectDetail/DetailBody/SubjectContent";
import SubjectLink from "components/Primitive/SubjectDetail/DetailBody/SubjectLink";
import CommentInfo from "components/Primitive/SubjectDetail/DetailBody/CommentInfo";
import CommentBox from "./CommentBox";

import { useUser } from "CustomHooks/user.js";

const DetailBodyWrapper = ({ subject, secondary, ...props }) => {
  const { user } = useUser();

  const username = user && user.username;

  return (
    <div {...props}>
      <SubjectContent>{subject.subjectContent}</SubjectContent>
      <SubjectLink secondary={secondary}>
        http://www.fideicomiso.org/home.html
      </SubjectLink>
      <CommentInfo secondary={secondary} username={username} />
      <CommentBox secondary={secondary} subject={subject} />
    </div>
  );
};

const DetailBody = styled(DetailBodyWrapper)`
  /* border: 1px solid orange; */

  width: 100%;

  padding: 0px;
  margin: 0px;
  /* margin: 0 21px 20px 21px; */
`;

DetailBody.propTypes = {
  secondary: PropTypes.bool,
  subjectContent: PropTypes.string.isRequired
};

export default DetailBody;
