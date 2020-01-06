import React from "react";
import styled from "styled-components";

import SignUpCard from "../DisplayWrappers/SignUpInCards/SignUpCard/SignUpCard";

import SignUpApi from "../DisplayWrappers/SignUpInCards/SignUpCard/API/SignUpCardAPI";
import useApi from "../../CustomHooks/useAPI";

const SignUpWrapper = ({ staticContext, ...props }) => {
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
    avatar: null,
    firstNameInputIsErrored: false,
    lastNameInputIsErrored: false,
    usernameInputIsErrored: false,
    emailInputIsErrored: false,
    locationInputIsErrored: false,
    passwordInputIsErrored: false,
    avatarInputIsErrored: false,
    success: false
  });

  return (
    <div {...props}>
      <SignUpCard api={api} />
    </div>
  );
};

const SignUp = styled(SignUpWrapper)`
  margin-bottom: 50px;

  display: flex;
  justify-content: center;
`;

export default SignUp;
