import React from "react";
import styled from "styled-components";

import ForgotPasswordCard from "../DisplayWrappers/SignUpInCards/ForgotPasswordCard/ForgotPasswordCard";
import SignInApi from "../DisplayWrappers/SignUpInCards/SignInCard/API/SignInCardApi";
import useApi from "../../CustomHooks/useAPI";

const SignInWrapper = ({ ...props }) => {
  const api = useApi(SignInApi, {
    emailValue: "",
    passwordValue: "",
    emailInputIsErrored: false,
    passwordInputIsErrored: false,
    forgotPasswordIsVisible: false
  });
  return (
    <div {...props}>
      <SignInCard api={api} />
    </div>
  );
};

const SignIn = styled(SignInWrapper)`
  margin-bottom: 50px;

  display: flex;
  justify-content: center;
`;

export default SignIn;
