import React from "react";
import styled from "styled-components";

import { SignUpInCardApiPropTypes } from "../API/proptypes/SignUpInCardApiPropTypes";

import TextField from "../../../Primitive/SignUpInCard/SignUpInCardTextInput";
import DropDown from "../DropDown/DropDown";
import PasswordField from "../../../Primitive/SignUpInCard/PasswordField.js";
import Logo from "../../../Primitive/SignUpInCard/SignUpInLogo";
import AvatarInstruction from "../../../Primitive/SidePanel_Profile/Avatars/AvatarInstruction";
import Avatars from "../Avatars/Avatars";
import ActionButton from "../../../Primitive/General/ActionButton";
import BottomLineWrapper from "./BottomLineWrapper";
import Error from "../../../Primitive/General/ErrorText";

const ErrorText = styled(Error)`
  margin: 0px;
  margin-right: auto;
  padding: 0px;
`;

const PasswordErrorText = styled(ErrorText)`
  margin-top: ${props => (props.api.listOpen ? "-5px" : "0px")};
`;

const AvatarInstructionSignUp = styled(AvatarInstruction)`
  /* border: 1px solid red; */
  padding: 0px;
  margin-right: auto;
  margin-left: 26px;
`;

const SignUpInButton = styled(ActionButton)`
  margin-top: 17px;
  margin-bottom: 19px;

  :hover {
    cursor: pointer;
  }

  :focus {
    outline: 0;
  }
`;

const SignUpCardBodyWrapper = ({ api, isSignUp, ...props }) => {
  return (
    <div {...props}>
      <Logo isSignUp={api.isSignUp} />
      {api.isSignUp && api.firstNameInputIsErrored && (
        <ErrorText>Please provide a first name</ErrorText>
      )}
      {api.isSignUp && (
        <TextField
          placeholder={"First Name"}
          value={api.firstNameValue}
          onChange={event => api.updateFirstNameValue(event.target.value)}
        />
      )}
      {api.isSignUp && api.lastNameInputIsErrored && (
        <ErrorText>Please provide a last name</ErrorText>
      )}
      {api.isSignUp && (
        <TextField
          placeholder={"Last Name"}
          value={api.lastNameValue}
          onChange={event => api.updateLastNameValue(event.target.value)}
        />
      )}
      {api.isSignUp && api.usernameInputIsErrored && (
        <ErrorText>Please provide a username</ErrorText>
      )}
      {api.isSignUp && (
        <TextField
          placeholder={"Username"}
          value={api.usernameValue}
          onChange={event => api.updateUsernameValue(event.target.value)}
        />
      )}
      {api.emailInputIsErrored && (
        <ErrorText>Please provide a valid email</ErrorText>
      )}
      <TextField
        placeholder={"Email"}
        value={api.emailValue}
        onChange={event => api.updateFirstEmailValue(event.target.value)}
      />
      <TextField
        placeholder={"Re-type Email"}
        value={api.emailValue}
        onChange={event => api.updateSecondEmailValue(event.target.value)}
      />
      {api.isSignUp && api.locationInputIsErrored && (
        <ErrorText>Please select a location from the dropdown</ErrorText>
      )}
      {api.isSignUp && <DropDown api={api} />}
      {api.isSignUp && api.passwordInputIsErrored && (
        <PasswordErrorText api={api}>
          Please provide a password
        </PasswordErrorText>
      )}
      <PasswordField
        placeholder={"Password"}
        value={api.firstPasswordValue}
        onChange={event => api.updateFirstPasswordValue(event.target.value)}
        api={api}
      />
      <PasswordField
        placeholder={"Re-type Password"}
        value={api.passwordValue}
        onChange={event => api.updateSecondPasswordValue(event.target.value)}
        api={api}
      />
      {api.isSignUp && api.avatarInputIsErrored && (
        <ErrorText>Please select an avatar</ErrorText>
      )}
      {api.isSignUp && (
        <AvatarInstructionSignUp api={api}>
          Select an Avatar
        </AvatarInstructionSignUp>
      )}
      {api.isSignUp && <Avatars api={api} />}
      <SignUpInButton
        secondary={api.isSignUp ? true : false}
        onClick={api.submit}
      >
        {api.isSignUp ? "SIGN UP" : "LOG IN"}
      </SignUpInButton>
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
