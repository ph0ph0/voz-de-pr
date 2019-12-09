import React from "react";
import styled from "styled-components";

import SignInCardApiPropTypes from "../API/proptypes/SignUpCardApiPropTypes";

import Logo from "../../../../Primitive/SignInCard/SignInLogo";
import EmailField from "../../../../Primitive/SignInCard/EmailField";
import PasswordField from "../../../../Primitive/SignInCard/PasswordField";
import ActionButton from "../../../../Primitive/General/ActionButton";
import BottomLineWrapper from "./SignInBottomLineWrapper";
import Error from "../../../../Primitive/General/ErrorText";

import { Auth } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import { listSubjects } from "../../../../../graphql/queries";
import { createSubject } from "../../../../../graphql/mutations";

import { useUser } from "../../../../../CustomHooks/user";

const ErrorText = styled(Error)`
  margin-right: auto;
`;

const SignInButton = styled(ActionButton)`
  margin-top: 17px;
  margin-bottom: 19px;

  :hover {
    cursor: pointer;
  }

  :focus {
    outline: 0;
  }
`;

const ForgotPasswordText = styled.button`
  color: rgba(0, 0, 0, 0.54);
  border: none;
  background-color: #fff;
  font-size: 13px;
  font-family: Avenir;
  letter-spacing: 1px;
`;

const SignInCardBodyWrapper = ({ api, ...props }) => {
  const { login, logout, user, error, loading } = useUser();

  const signIn = () => {
    const email = "test@test.com";
    const password = "1234567890";
    login(email, password);
  };

  const signOut = () => {
    logout();
  };

  const gCU = () => {
    window.log(`CURRENTUSER: ${JSON.stringify(user)}zzz`);
  };
  const fPW = () => {
    window.log(`forgot password`);
  };
  return (
    <div {...props}>
      <Logo />
      {api.emailInputIsErrored && (
        <ErrorText>Please provide your email</ErrorText>
      )}
      <EmailField
        placeholder={"Email"}
        value={api.emailValue}
        onChange={event => api.updateEmailValue(event.target.value)}
        api={api}
      />
      {api.passwordInputIsErrored && (
        <ErrorText>Please provide your password</ErrorText>
      )}
      <PasswordField
        placeholder={"Password"}
        value={api.passwordValue}
        onChange={event => api.updatePasswordValue(event.target.value)}
        api={api}
      />
      {error && <p>Error!</p>}
      {loading && <p>Loading...</p>}
      <SignInButton onClick={signIn}>LOG IN</SignInButton>
      <BottomLineWrapper />
      <ForgotPasswordText>Forgot your password?</ForgotPasswordText>
    </div>
  );
};

const SignInCard = styled(SignInCardBodyWrapper)`
  /* border: 1px solid red; */
  width: 468px;
  height: auto;

  margin-left: 41px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

SignInCard.propTypes = {
  api: SignInCardApiPropTypes
};

export default SignInCard;
