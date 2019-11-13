import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import SignUpInCard from "../DisplayWrappers/SignUpInCard/SignUpInCard";

import SignUpInApi from "../DisplayWrappers/SignUpInCard/API/SignUpCardAPI";
import useApi from "../../CustomHooks/useAPI";

const SignUpInPageWrapper = withRouter(({ ...props }) => {
  const isSignup = props.location.state.clickedSignUp ? true : false;

  const api = useApi(SignUpInApi, {
    nameValue: "",
    usernameValue: "",
    emailValue: "",
    locationValue: "",
    passwordValue: "",
    selectedLocation: "",
    listOpen: false,
    dropDownIsErrored: false,
    selectedAvatar: null,
    isSignUp: isSignup,
    inputErrorState = {
      nameInput: {isErrored: true},
      usernameInput: {isErrored: true},
      emailInput: {isErrored: true},
      passwordInput: {isErrored: true},
      locationInput: {isErrored: true},
      passwordInput: {isErrored: true},
      avatarInput: {isErrored: true},
  }
  });

  return (
    <div {...props}>
      <SignUpInCard api={api} isSignUp={api.isSignUp} />
    </div>
  );
});

const SignUpIn = styled(SignUpInPageWrapper)`
  display: flex;
  justify-content: center;
`;

export default SignUpIn;
