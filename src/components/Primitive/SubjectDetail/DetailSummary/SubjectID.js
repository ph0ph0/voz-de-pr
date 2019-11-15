import React from "react";
import styled from "styled-components";

const SubjectIDWrapper = ({ subjectID, secondary,  ...props}) => {
  return (
    <div {...props}>
      {secondary ? "PostID - " : "CauseID - "}{subjectID}
    </div>
  );
};

const SubjectID = styled(SubjectIDWrapper)`
    /* border: 1px solid darkgoldenrod; */
    color: rgba(0, 0, 0, 0.54);
    font-family: Avenir;
    text-align: left;
    font-size: 12px;

    margin-left: auto;
    margin-right: auto;
`;

export default SubjectID;