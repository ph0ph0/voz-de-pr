import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import SignUpInButton from "components/Primitive/NavBar/SignUpInButton";
import { useLanguage } from "CustomHooks/useLanguage";

const displayText = {
  en: {
    login: "LOG IN",
    signup: "SIGN UP"
  },
  sp: {
    login: "INCIAR SESIÓN",
    signup: "CREAR CUENTA"
  }
};

const Wrapper = ({ staticContext, ...props }) => {
  const { language } = useLanguage();

  let history = useHistory();

  function navigateToSignUp() {
    history.push({
      pathname: "/signup"
    });
  }

  function nagivateToSignIn() {
    history.push({
      pathname: "/signin"
    });
  }

  return (
    <div {...props}>
      <SignUpInButton secondary onClick={navigateToSignUp}>
        {language === "spanish" ? displayText.sp.signup : displayText.en.signup}
      </SignUpInButton>
      <SignUpInButton onClick={nagivateToSignIn}>
        {language === "spanish" ? displayText.sp.login : displayText.en.login}
      </SignUpInButton>
    </div>
  );
};

const SignUpInButtonWrapper = styled(Wrapper)`
  /* background-color: blue; */
  height: 100%;
  width: 50%;
  /* padding-left: 10px; */
  /* margin-right: -15px; */
  margin-left: 15px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export default SignUpInButtonWrapper;
