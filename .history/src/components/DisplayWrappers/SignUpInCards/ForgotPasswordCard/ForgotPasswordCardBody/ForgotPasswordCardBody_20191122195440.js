import React, { Fragment } from "react";
import styled from "styled-components";

import Logo from "../../../../Primitive/SignInCard/SignInLogo";
import EmailField from "../../../../Primitive/SignInCard/EmailField";
import PasswordField from "../../../../Primitive/SignInCard/PasswordField";
import ActionButton from "../../../../Primitive/General/ActionButton";
import BottomLineWrapper from "../../SignInCard/SignInCardBody/SignInBottomLineWrapper";
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

const Info = styled.p`
  color: rgba(0, 0, 0, 0.54);
  font-size: 14px;
  padding: 0px;
  margin: 20px;
`;

const ForgotPasswordCardBodyWrapper = ({ api, ...props }) => {
  const navigateToLogin = () => {};
  const renderSwitch = content => {
    window.log(`Content in renderSwitch: ${content}`);
    switch (content) {
      case "email":
        return (
          <Fragment>
            <Info>
              Please enter your email and we will send you a recovery code
            </Info>
            <EmailField
              data-testid="EmailInput"
              placeholder={"Email"}
              value={api.emailValue}
              onChange={event => api.updateEmailValue(event.target.value)}
            />
          </Fragment>
        );
      case "code":
        return (
          <Fragment>
            <Info>Please check your email for your confirmation code</Info>
            <EmailField
              data-testid="EmailInput"
              placeholder={"Confirmation code"}
              value={api.emailValue}
              onChange={event => api.updateEmailValue(event.target.value)}
            />
            <PasswordField
              data-testid="PasswordInput"
              placeholder={"Password"}
              value={api.firstPasswordValue}
              onChange={event =>
                api.updateFirstPasswordValue(event.target.value)
              }
            />
            <PasswordField
              data-testid="PasswordInput"
              placeholder={"Confirm Password"}
              value={api.passwordValue}
              onChange={event =>
                api.updateSecondPasswordValue(event.target.value)
              }
            />
          </Fragment>
        );
      case "success":
        return (
          <Fragment>
            <p>Success! Please log in</p>
            <ActionButton onClick={navigateToLogin}>
              Return to login
            </ActionButton>
          </Fragment>
        );
    }
  };

  return (
    <div {...props}>
      <Logo />
      {renderSwitch(api.content)}
      {api.content !== "success" && (
        <SignInButton onClick={api.submit} data-testid="SignInButton">
          {api.loading ? <LoadingSpinner /> : "LOG IN"}
        </SignInButton>
      )}
      <BottomLineWrapper />
    </div>
  );
};

const ForgotPasswordCard = styled(ForgotPasswordCardBodyWrapper)`
  width: 468px;
  height: auto;

  margin-left: 41px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ForgotPasswordCard;
