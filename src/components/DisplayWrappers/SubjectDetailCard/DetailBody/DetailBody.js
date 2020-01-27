import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import SubjectContent from "components/Primitive/SubjectDetail/DetailBody/SubjectContent";
import SubjectLink from "components/Primitive/SubjectDetail/DetailBody/SubjectLink";
import CommentInfo from "components/Primitive/SubjectDetail/DetailBody/CommentInfo";
import CommentBox from "./CommentBox";

import { useUser } from "CustomHooks/user.js";

const DetailBodyWrapper = ({ api, secondary, ...props }) => {
  const { user } = useUser();

  const username = user && user.username;

  return (
    <div {...props}>
      <SubjectContent>{api.subject.subjectContent}</SubjectContent>
      {api.subject && api.subject.link && (
        <SubjectLink
          secondary={secondary}
          href={api.subject.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {api.subject.link}
        </SubjectLink>
      )}
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
