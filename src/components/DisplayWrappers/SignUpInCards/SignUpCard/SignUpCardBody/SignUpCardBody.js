import React, { useEffect } from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";

import { SignUpInCardApiPropTypes } from "../API/proptypes/SignUpCardApiPropTypes";

import TextField from "components/Primitive/SignUpCard/SignUpCardTextInput";
import DropDown from "../DropDown/DropDown";
import PasswordField from "components/Primitive/SignUpCard/PasswordField.js";
import EmailField from "components/Primitive/SignUpCard/EmailField";
import Logo from "components/Primitive/SignUpCard/SignUpLogo";
import AvatarInstruction from "components/Primitive/SidePanel_Profile/Avatars/AvatarInstruction";
import ProfPicSelector from "../Avatars/ProfPicSelector";
import ActionButton from "components/Primitive/General/ActionButton";
import BottomLineWrapper from "./SignUpBottomLineWrapper";
import Error from "components/Primitive/General/ErrorText";
import LoadingSpinner from "components/Primitive/General/LoadingSpinner";

import { Helmet } from "react-helmet";

import { displayText } from "./SignUpDisplayText";
import { useLanguage } from "CustomHooks/useLanguage";

const ErrorText = styled(Error)`
  margin: 0px;
  margin-right: auto;
  padding: 0px;
`;

const AvatarInstructionSignUp = styled(AvatarInstruction)`
  /* border: 1px solid red; */
  padding: 0px;
  margin-right: auto;
  margin-left: 26px;
`;

const SignUpButton = styled(ActionButton)`
  margin-top: 17px;
  margin-bottom: 19px;

  :hover {
    cursor: pointer;
  }

  :focus {
    outline: 0;
  }
`;

const SignUpCardBodyWrapper = ({ api, ...props }) => {
  const { language } = useLanguage();

  const metaTitle =
    language === "spanish"
      ? "Voz de Puerto Rico | Crear Cuenta"
      : "Voz de Puerto Rico | Sign Up";

  const history = useHistory();
  //If signup is successful, `success` in the api will be true
  //and we can pass over the email, password and avatar file object
  useEffect(() => {
    if (api.success) {
      window.log(`naving to confirm sign up...`);
      history.push({
        pathname: "/confirmsignup",
        state: {
          email: api.secondEmailValue,
          password: api.secondPasswordValue,
          avatar: api.avatar
        }
      });
    }
  }, [api.success]);

  return (
    <div {...props}>
      <Helmet>
        <title>{metaTitle}</title>
      </Helmet>
      <Logo />
      {api.firstNameInputIsErrored && (
        <ErrorText>
          {language === "spanish"
            ? displayText.sp.nameError
            : displayText.en.nameError}
        </ErrorText>
      )}

      <TextField
        placeholder={
          language === "spanish" ? displayText.sp.name : displayText.en.name
        }
        data-testid="FirstNameInput"
        value={api.firstNameValue}
        onChange={event => api.updateFirstNameValue(event.target.value)}
      />

      {api.lastNameInputIsErrored && (
        <ErrorText>
          {language === "spanish"
            ? displayText.sp.lastNameError
            : displayText.en.lastNameError}
        </ErrorText>
      )}

      <TextField
        placeholder={
          language === "spanish"
            ? displayText.sp.lastName
            : displayText.en.lastName
        }
        data-testid="LastNameInput"
        value={api.lastNameValue}
        onChange={event => api.updateLastNameValue(event.target.value)}
      />

      {api.usernameInputIsErrored && (
        <ErrorText>
          {language === "spanish"
            ? displayText.sp.usernameError
            : displayText.en.usernameError}
        </ErrorText>
      )}

      <TextField
        placeholder={
          language === "spanish"
            ? displayText.sp.username
            : displayText.en.username
        }
        data-testid="UserNameInput"
        value={api.usernameValue}
        onChange={event => api.updateUsernameValue(event.target.value)}
      />

      {api.emailInputIsErrored && (
        <ErrorText>
          {language === "spanish"
            ? displayText.sp.emailError
            : displayText.en.emailError}
        </ErrorText>
      )}
      <EmailField
        api={api}
        placeholder={"Email"}
        data-testid="FirstEmailInput"
        value={api.firstEmailValue}
        onChange={event => api.updateFirstEmailValue(event.target.value)}
      />

      <EmailField
        api={api}
        placeholder={
          language === "spanish"
            ? displayText.sp.retypeEmail
            : displayText.en.retypeEmail
        }
        data-testid="SecondEmailInput"
        value={api.secondEmailValue}
        onChange={event => api.updateSecondEmailValue(event.target.value)}
      />

      {api.locationInputIsErrored && (
        <ErrorText>
          {language === "spanish"
            ? displayText.sp.locationError
            : displayText.en.locationError}
        </ErrorText>
      )}
      <DropDown api={api} />
      {api.passwordInputIsErrored && (
        <ErrorText>
          {language === "spanish"
            ? displayText.sp.passwordError
            : displayText.en.passwordError}
        </ErrorText>
      )}
      <PasswordField
        placeholder={
          language === "spanish"
            ? displayText.sp.password
            : displayText.en.password
        }
        data-testid="FirstPasswordInput"
        value={api.firstPasswordValue}
        onChange={event => api.updateFirstPasswordValue(event.target.value)}
        api={api}
      />

      <PasswordField
        placeholder={
          language === "spanish"
            ? displayText.sp.retypePassword
            : displayText.en.retypePassword
        }
        data-testid="SecondPasswordInput"
        value={api.secondPasswordValue}
        onChange={event => api.updateSecondPasswordValue(event.target.value)}
        api={api}
      />

      {api.avatarInputIsErrored && (
        <ErrorText>
          {language === "spanish"
            ? displayText.sp.profPicError
            : displayText.en.profPicError}
        </ErrorText>
      )}

      <AvatarInstructionSignUp api={api}>
        {language === "spanish"
          ? displayText.sp.profPic
          : displayText.en.profPic}
      </AvatarInstructionSignUp>
      <ProfPicSelector api={api} />
      {/* <Avatars api={api} /> */}
      {api.error && <Error>{api.error.message}</Error>}
      <SignUpButton
        data-testid="submitButton"
        secondary
        onClick={api.submit}
        disabled={api.loading && "disabled"}
      >
        {api.loading ? (
          <LoadingSpinner />
        ) : language === "spanish" ? (
          displayText.sp.signUp
        ) : (
          displayText.en.signUp
        )}
      </SignUpButton>
      <BottomLineWrapper api={api} />
    </div>
  );
};

const SignUpCardBody = styled(SignUpCardBodyWrapper)`
  /* border: 1px solid indigo; */

  width: 468px;
  height: auto;

  margin-left: 41px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

SignUpCardBody.propTypes = {
  api: SignUpInCardApiPropTypes
};

export default SignUpCardBody;
