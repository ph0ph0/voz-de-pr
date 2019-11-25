import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";

import SignInCardApiPropTypes from "../API/proptypes/SignUpCardApiPropTypes";

import Logo from "../../../../Primitive/SignInCard/SignInLogo";
import EmailField from "../../../../Primitive/SignInCard/EmailField";
import PasswordField from "../../../../Primitive/SignInCard/PasswordField";
import ActionButton from "../../../../Primitive/General/ActionButton";
import BottomLineWrapper from "../SignInCardBody/SignInBottomLineWrapper";
import Error from "../../../../Primitive/General/ErrorText";
import LoadingSpinner from "../../../../Primitive/General/LoadingSpinner";

const ErrorText = styled(Error)`
  margin-right: auto;
`;

const LoginErrorText = styled(Error)`
  margin-right: auto;
  margin-left: auto;
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
  letter-spacing: 0.5px;
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: 0;
  }
`;

const SignInCardBodyWrapper = ({ api, ...props }) => {
  const history = useHistory();

  const navToForgotPassword = () => {
    window.log("Naving to forgot password");

    history.push({
      pathname: "/forgotpassword"
    });
  };

  return (
    <div {...props}>
      <Logo />
      {api.emailInputIsErrored && (
        <ErrorText data-testid="EmailEmptyErrorText">
          Please provide your email
        </ErrorText>
      )}
      <EmailField
        data-testid="EmailInput"
        placeholder={"Email"}
        value={api.emailValue}
        onChange={event => api.updateEmailValue(event.target.value)}
        api={api}
      />
      {api.passwordInputIsErrored && (
        <ErrorText data-testid="PasswordEmptyErrorText">
          Please provide your password
        </ErrorText>
      )}
      <PasswordField
        data-testid="PasswordInput"
        placeholder={"Password"}
        value={api.passwordValue}
        onChange={event => api.updatePasswordValue(event.target.value)}
        api={api}
      />
      {api.error && (
        <LoginErrorText data-testid="LoginErrorText">
          {api.error.message}
        </LoginErrorText>
      )}
      {/* {api.loading && <p>Loading...</p>} */}
      <SignInButton onClick={api.submit} data-testid="SignInButton">
        {api.loading ? <LoadingSpinner /> : "LOG IN"}
      </SignInButton>
      <BottomLineWrapper />
      <ForgotPasswordText
        data-testid="ForgotPasswordText"
        Button
        onClick={navToForgotPassword}
      >
        {api.forgotPasswordIsVisible ? "Show log in" : "Forgot your password?"}
      </ForgotPasswordText>
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
