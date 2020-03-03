import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import SubjectDetailTitle from "components/Primitive/SubjectDetail/DetailHeader/SubjectDetailTitle";
import VotesOnSubject from "components/Primitive/SubjectDetail/General/VotesOnSubject";

const DetailHeaderBottomLineWrapper = ({ secondary, api, ...props }) => {
  return (
    <div {...props}>
      <SubjectDetailTitle>{api.subject.title}</SubjectDetailTitle>
      <VotesOnSubject
        secondary={secondary}
        votesOnSubject={api.subject.votes}
      />
    </div>
  );
};

const DetailHeaderBottomLine = styled(DetailHeaderBottomLineWrapper)`
  /* border: 1px solid teal; */

  height: 27px;
  width: auto;

  margin-top: 27px;

  display: flex;
  flex-direction: row;
`;

// DetailHeaderBottomLine.propTypes = {
//   secondary: PropTypes.bool,
//   votesOnSubject: PropTypes.number.isRequired
// };

export default DetailHeaderBottomLine;
