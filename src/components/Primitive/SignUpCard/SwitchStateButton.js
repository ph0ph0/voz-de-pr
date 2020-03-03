import React from "react";
import styled from "styled-components";
import { useLanguage } from "CustomHooks/useLanguage";

const displayText = {
  en: {
    login: "LOG IN",
    signUp: "SIGN UP"
  },
  sp: {
    login: "INCIAR SESIÓN",
    signUp: "CREAR CUENTA"
  }
};

const SwitchStateButtonWrapper = ({ isSignUp, ...props }) => {
  const { language } = useLanguage();

  return (
    <button {...props}>
      {isSignUp
        ? language === "spanish"
          ? displayText.sp.login
          : displayText.en.login
        : language === "spanish"
        ? displayText.sp.signUp
        : displayText.en.signUp}
    </button>
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
