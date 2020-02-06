import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import SignUpInButton from "components/Primitive/NavBar/SignUpInButton";

const Wrapper = ({ staticContext, ...props }) => {
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
        CREAR CUENTA
      </SignUpInButton>
      <SignUpInButton onClick={nagivateToSignIn}>INCIAR SESIÓN</SignUpInButton>
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
  justify-content: flex-end;
  align-items: center;
`;

export default SignUpInButtonWrapper;
