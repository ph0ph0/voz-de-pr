import React from "react";
import styled from "styled-components";

import ActionButton from "../../General/ActionButton";

const ActButton = ({ ...props}) => {
  return <ActionButton {...props}>Comment</ActionButton>;
};


const CommentButton = styled(ActButton)`
    width: 125px;
    height: 30px;

    background-color: ${props => (props.secondary ? props.theme.secondaryColour : props.theme.primaryColour)};
`;

export default CommentButton;