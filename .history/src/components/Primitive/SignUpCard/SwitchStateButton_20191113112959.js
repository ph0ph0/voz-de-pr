import React from "react";
import styled from "styled-components";

const SwitchStateButtonWrapper = ({ isSignUp, ...props }) => {
  return <button {...props}>{isSignUp ? "LOG IN" : "SIGN UP"}</button>;
};

const SwitchStateButton = styled(SwitchStateButtonWrapper)`
  /* border: 1px solid red; */

  border: none;
  font-size: 14px;

  margin-left: 5px;
  padding: 0px;

  color: ${props =>
    props.isSignUp ? props.theme.primaryColour : props.theme.secondaryColour};

  :hover {
    cursor: pointer;
  }

  :focus {
    outline: 0;
  }
`;

export default SwitchStateButton;
