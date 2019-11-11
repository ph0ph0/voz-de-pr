import React from "react";
import styled from "styled-components";

import SignUpInCard from "../DisplayWrappers/SignUpInCard/SignUpInCard";

import SignUpInApi from "../DisplayWrappers/SignUpInCard/API/SignUpCardAPI";
import useApi from "../../CustomHooks/useAPI";

const SignUpInPageWrapper = ({ ...props }) => {
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
    isSignUp: true
  });

  return (
    <div {...props}>
      <SignUpInCard api={api} isSignUp={api.isSignUp} />
    </div>
  );
};

const SignUpIn = styled(SignUpInPageWrapper)`
  display: flex;
  justify-content: center;
`;

export default SignUpIn;
