import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import SignUpInButton from "../../../../Primitive/NavBar/SignUpInButton";

const Wrapper = props => {
  let history = useHistory();

  function navigateToSignUp() {
    history.push({
      pathname: "",
      state: {
        clickedSignUp: true
      }
    });
  }

  function nagivateToSignIn() {
    history.push({
      pathname: "",
      state: {
        clickedSignUp: false
      }
    });
  }

  return (
    <div {...props}>
      <SignUpInButton secondary onClick={navigateToSignUp}>
        SIGN UP
      </SignUpInButton>
      <SignUpInButton onClick={nagivateToSignIn}>LOG IN</SignUpInButton>
    </div>
  );
};

const SignUpInButtonWrapper = styled(Wrapper)`
  /* background-color: blue; */
  height: 100%;
  width: 40%;
  padding-left: 10px;
  margin-right: -15px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default SignUpInButtonWrapper;
