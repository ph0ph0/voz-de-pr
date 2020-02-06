import React from "react";
import styled from "styled-components";

const SwitchStateButtonWrapper = ({ isSignUp, ...props }) => {
  return (
    <button {...props}>{isSignUp ? "INCIAR SESIÓN" : "CREAR CUENTA"}</button>
  );
};

const SwitchStateButton = styled(SwitchStateButtonWrapper)`
  /* border: 1px solid red; */

  border: none;
  font-size: 14px;

  margin-left: 5px;
  padding: 0px;

  color: ${props =>
    props.isSignUp ? props.theme.primaryColour : props.theme.secondaryColour};
  background-color: #fff;

  :hover {
    cursor: pointer;
  }

  :focus {
    outline: 0;
  }
`;

export default SwitchStateButton;
