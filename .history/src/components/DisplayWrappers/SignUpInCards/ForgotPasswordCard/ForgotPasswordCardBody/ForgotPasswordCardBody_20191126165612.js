import React, { Fragment } from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";

import Logo from "../../../../Primitive/SignInCard/SignInLogo";
import EmailField from "../../../../Primitive/SignInCard/EmailField";
import PasswordField from "../../../../Primitive/SignUpCard/PasswordField";
import ActionButton from "../../../../Primitive/General/ActionButton";
import Error from "../../../../Primitive/General/ErrorText";
import LoadingSpinner from "../../../../Primitive/General/LoadingSpinner";

const ErrorText = styled(Error)`
  margin-right: auto;
  margin-left: auto;
`;

const SubmitButton = styled(ActionButton)`
  margin-top: 17px;
  margin-bottom: 19px;

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
  margin: 10px;
`;

const ForgotPasswordCardBodyWrapper = ({ api, ...props }) => {
  const navigateToLogin = () => {
    let history = useHistory();

    history.push({
      pathname: "/signin"
    });
  };

  const renderSwitch = content => {
    switch (content) {
      case "email":
        return (
          <Fragment>
            <Info>
              Please enter your email and we will send you a recovery code
            </Info>
            <EmailField
              data-testid="fpwEmailInput"
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
              data-testid="CodeInput"
              placeholder={"Confirmation code"}
              value={api.codeValue}
              onChange={event => api.updateCodeValue(event.target.value)}
            />
            <PasswordField
              data-testid="FirstPasswordInput"
              placeholder={"New password"}
              value={api.firstPasswordValue}
              onChange={event =>
                api.updateFirstPasswordValue(event.target.value)
              }
              api={api}
            />
            <PasswordField
              data-testid="SecondPasswordInput"
              placeholder={"Confirm Password"}
              value={api.secondPasswordValue}
              onChange={event =>
                api.updateSecondPasswordValue(event.target.value)
              }
              api={api}
            />
          </Fragment>
        );
      case "success":
        return (
          <Fragment>
            <p data-testid="SuccessText">Success! Please log in</p>
            <ActionButton onClick={navigateToLogin} data-testid="SuccessButton">
              GO TO LOGIN
            </ActionButton>
          </Fragment>
        );
    }
  };

  return (
    <div {...props}>
      <Logo />
      {renderSwitch(api.content)}
      {api.error && (
        <ErrorText data-testid="ErrorText">{api.error.message}</ErrorText>
      )}
      {api.content !== "success" && (
        <SubmitButton onClick={api.submit} data-testid="fpwSubmitButton">
          {api.loading ? (
            <LoadingSpinner />
          ) : api.content === "email" ? (
            "SEND"
          ) : (
            "CHANGE"
          )}
        </SubmitButton>
      )}
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
