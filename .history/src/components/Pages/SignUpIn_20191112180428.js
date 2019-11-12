import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import SignUpInCard from "../DisplayWrappers/SignUpInCard/SignUpInCard";

import SignUpInApi from "../DisplayWrappers/SignUpInCard/API/SignUpCardAPI";
import useApi from "../../CustomHooks/useAPI";

const SignUpInPageWrapper = withRouter(({ staticContext, ...props }) => {
  const x = props.location.state.clickedSignUp;
  window.log(`Clicked navbar su/li buttons, isSignup?: ${isSignup}`);

  const api = useApi(SignUpInApi, {
    firstNameValue: "",
    lastNameValue: "",
    usernameValue: "",
    firstEmailValue: "",
    secondEmailValue: "",
    locationValue: "",
    firstPasswordValue: "",
    secondPasswordValue: "",
    selectedLocation: null,
    emailsMatch: null,
    passwordsMatch: null,
    listOpen: false,
    selectedAvatar: null,
    isSignUp: true,
    firstNameInputIsErrored: false,
    lastNameInputIsErrored: false,
    usernameInputIsErrored: false,
    emailInputIsErrored: false,
    locationInputIsErrored: false,
    passwordInputIsErrored: false,
    avatarInputIsErrored: false
  });

  return (
    <div {...props}>
      <SignUpInCard api={api} x={x} />
    </div>
  );
});

const SignUpIn = styled(SignUpInPageWrapper)`
  margin-bottom: 50px;

  display: flex;
  justify-content: center;
`;

export default SignUpIn;
