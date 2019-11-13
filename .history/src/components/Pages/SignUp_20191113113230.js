import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import SignUpCard from "../DisplayWrappers/SignUpInCards/SignUpCard/SignUpCard";

import SignUpApi from "../DisplayWrappers/SignUpInCards/SignUpCard/API/SignUpCardAPI";
import useApi from "../../CustomHooks/useAPI";

const SignUpPageWrapper = withRouter(({ staticContext, ...props }) => {
  const showSignUp = props.location.state.clickedSignUp;
  // window.log(`Clicked navbar su/li buttons, isSignup?: ${isSignup}`);

  const api = useApi(SignUpApi, {
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
    isSignUp: showSignUp,
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
      <SignUpCard api={api} showSignUp={showSignUp} />
    </div>
  );
});

const SignUp = styled(SignUpPageWrapper)`
  margin-bottom: 50px;

  display: flex;
  justify-content: center;
`;

export default SignUp;
