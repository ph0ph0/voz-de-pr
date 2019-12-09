import React from "react";
import styled from "styled-components";

import BubbleWrapper from "./BubbleWrapper";
import CommentsIndicator from "../../../Primitive/SubjectCard/CommentsIndicator";

const Wrapper = ({numberOfComments, ...props}) => {
  return (
    <div {...props}>
      <BubbleWrapper />
      <CommentsIndicator>{numberOfComments} {(numberOfComments > 1) ? "Comments" : (numberOfComments === 1) ? "Comment" : "0 Comments"}</CommentsIndicator>
    </div>
  );
};

const BottomWrapper = styled(Wrapper)`
    /* border: 1px solid blue; */
    width: 100%;
    height: 16px;

    margin-top: 9px;

    display: flex;
    place-content: flex-start;
`;

export default BottomWrapper;