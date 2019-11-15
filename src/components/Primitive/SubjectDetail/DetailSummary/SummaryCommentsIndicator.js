import styled from "styled-components";
import React from "react";

const CommentsIndicatorWrapper = ({ noOfComments, ...props}) => {
  return (
    <div {...props}>
      {noOfComments} {(noOfComments > 1) ? "Comments" : (noOfComments === 1) ? "Comment" : "0 Comments"}
    </div>

  );
};

const SummaryCommentsIndicator = styled(CommentsIndicatorWrapper)`
    /* border: 1px solid lime; */
    height: 16px;
    width: auto;

    color: rgba(0, 0, 0, 0.54);
    font-family: Avenir;
    text-align: left;
    font-size: 12px;
`;

export default SummaryCommentsIndicator;