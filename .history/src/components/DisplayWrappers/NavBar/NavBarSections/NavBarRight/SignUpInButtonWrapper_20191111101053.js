import React from "react";
import styled from "styled-components";

import SignUpInButton from "../../../../Primitive/NavBar/SignUpInButton";

const Wrapper = props => {
  function navigateToSignUp() {
    console.log(`Clicked a SignUpInButton`);
  }

  function nagivateToSignIn() {}

  return (
    <div {...props}>
      <SignUpInButton secondary onClick={onClick}>
        SIGN UP
      </SignUpInButton>
      <SignUpInButton onClick={onClick}>LOG IN</SignUpInButton>
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
