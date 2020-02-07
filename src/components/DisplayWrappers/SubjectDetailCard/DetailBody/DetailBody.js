import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Microlink from "@microlink/react";

import SubjectContent from "components/Primitive/SubjectDetail/DetailBody/SubjectContent";
import SubjectLink from "components/Primitive/SubjectDetail/DetailBody/SubjectLink";
import CommentInfo from "components/Primitive/SubjectDetail/DetailBody/CommentInfo";
import CommentBox from "./CommentBox";

import { useUser } from "CustomHooks/user.js";

const RichLink = styled(Microlink)`
  margin-top: 20px;
  border-radius: 5px;
`;

const DetailBodyWrapper = ({ api, secondary, ...props }) => {
  const { user } = useUser();

  const username = user && user.username;

  return (
    <div {...props}>
      <SubjectContent>{api.subject.subjectContent}</SubjectContent>
      {api.subject && api.subject.link && <RichLink url={api.subject.link} />}
      {user && (
        <>
          <CommentInfo secondary={secondary} username={username} />
          <CommentBox secondary={secondary} api={api} />
        </>
      )}
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

// DetailBody.propTypes = {
//   secondary: PropTypes.bool,
//   subjectContent: PropTypes.string.isRequired
// };

export default DetailBody;
