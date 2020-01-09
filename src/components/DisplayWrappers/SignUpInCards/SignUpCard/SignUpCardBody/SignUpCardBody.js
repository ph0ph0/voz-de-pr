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
      <Logo />
      {api.firstNameInputIsErrored && (
        <ErrorText>Please provide a first name</ErrorText>
      )}

      <TextField
        placeholder={"First Name"}
        data-testid="FirstNameInput"
        value={api.firstNameValue}
        onChange={event => api.updateFirstNameValue(event.target.value)}
      />

      {api.lastNameInputIsErrored && (
        <ErrorText>Please provide a last name</ErrorText>
      )}

      <TextField
        placeholder={"Last Name"}
        data-testid="LastNameInput"
        value={api.lastNameValue}
        onChange={event => api.updateLastNameValue(event.target.value)}
      />

      {api.usernameInputIsErrored && (
        <ErrorText>Please provide a username</ErrorText>
      )}

      <TextField
        placeholder={"Username"}
        data-testid="UserNameInput"
        value={api.usernameValue}
        onChange={event => api.updateUsernameValue(event.target.value)}
      />

      {api.emailInputIsErrored && (
        <ErrorText>Please provide a valid email</ErrorText>
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
        placeholder={"Re-type Email"}
        data-testid="SecondEmailInput"
        value={api.secondEmailValue}
        onChange={event => api.updateSecondEmailValue(event.target.value)}
      />

      {api.locationInputIsErrored && (
        <ErrorText>Please select a location from the dropdown</ErrorText>
      )}
      <DropDown api={api} />
      {api.passwordInputIsErrored && (
        <ErrorText>Please provide a password</ErrorText>
      )}
      <PasswordField
        placeholder={"Password"}
        data-testid="FirstPasswordInput"
        value={api.firstPasswordValue}
        onChange={event => api.updateFirstPasswordValue(event.target.value)}
        api={api}
      />

      <PasswordField
        placeholder={"Re-type Password"}
        data-testid="SecondPasswordInput"
        value={api.secondPasswordValue}
        onChange={event => api.updateSecondPasswordValue(event.target.value)}
        api={api}
      />

      {api.avatarInputIsErrored && (
        <ErrorText>Please select an avatar</ErrorText>
      )}

      <AvatarInstructionSignUp api={api}>
        Select an Avatar
      </AvatarInstructionSignUp>
      <ProfPicSelector api={api} />
      {/* <Avatars api={api} /> */}
      {api.error && <Error>{api.error.message}</Error>}
      <SignUpButton data-testid="submitButton" secondary onClick={api.submit}>
        {api.loading ? <LoadingSpinner /> : "SIGN UP"}
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
