import React, { useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import SignUpInCard from "../DisplayWrappers/SignUpInCard/SignUpInCard";

import SignUpInApi from "../DisplayWrappers/SignUpInCard/API/SignUpCardAPI";
import useApi from "../../CustomHooks/useAPI";

const SignUpInPageWrapper = withRouter(({ staticContext, ...props }) => {
  const signUpWasClicked = props.location.state.clickedSignUp ? true : false;
  window.log(`Clicked navbar su/li buttons, isSignup?: ${signUpWasClicked}`);

  const [isSignUp, setIsSignUp] = useState(true);

  setIsSignUp(() => {
    return signUpWasClicked;
  });

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
    isSignUp: isSignUp,
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
      <SignUpInCard api={api} isSignUp={api.isSignUp} />
    </div>
  );
});

const SignUpIn = styled(SignUpInPageWrapper)`
  margin-bottom: 50px;

  display: flex;
  justify-content: center;
`;

export default SignUpIn;
