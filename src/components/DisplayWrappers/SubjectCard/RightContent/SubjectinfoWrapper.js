import React from "react";
import styled from "styled-components";

import SubjectVotes from "components/Primitive/SubjectCard/SubjectVotes";
import SubjectType from "components/Primitive/SubjectCard/SubjectType";

const Wrapper = ({ numberOfVotes, secondary, ...props }) => {
  return (
    <div {...props}>
      <SubjectVotes secondary={secondary}>
        {numberOfVotes}{" "}
        {numberOfVotes > 1 ? "VOTOS" : numberOfVotes === 1 ? "VOTO" : "VOTOS"}
      </SubjectVotes>
      <SubjectType secondary={secondary} />
    </div>
  );
};

const SubjectInfoWrapper = styled(Wrapper)`
  /* 74% aligns the text over the image */
  width: 74%;
  height: 22px;

  display: flex;
  flex-direction: row;
`;

export default SubjectInfoWrapper;
