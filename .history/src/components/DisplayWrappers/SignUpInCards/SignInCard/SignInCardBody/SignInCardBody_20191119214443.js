import React, { useState } from "react";
import styled from "styled-components";

import SignInCardApiPropTypes from "../API/proptypes/SignUpCardApiPropTypes";

import Logo from "../../../../Primitive/SignInCard/SignInLogo";
import EmailField from "../../../../Primitive/SignInCard/EmailField";
import PasswordField from "../../../../Primitive/SignInCard/PasswordField";
import ActionButton from "../../../../Primitive/General/ActionButton";
import BottomLineWrapper from "./SignInBottomLineWrapper";
import Error from "../../../../Primitive/General/ErrorText";

import { Auth } from "aws-amplify";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { listSubjects } from "../../../../../graphql/queries";
import { createSubject } from "../../../../../graphql/mutations";

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

const SignInCardBodyWrapper = ({ api, ...props }) => {
  const subjects = async () => {
    var sub = null;
    try {
      sub = await API.graphql(graphqlOperation({ listSubjects }));
      window.log(`subjects you fucka: ${JSON.stringify(subjects)}`);
    } catch (error) {
      window.log(`error fuckface: ${error.message}`);
    }

    return sub;
  };
  const LogIn = async () => {
    const email = "test@test.com";
    const password = "1234567890";

    try {
      await Auth.signOut();
      window.log(`Logged out`);
    } catch (error) {
      window.log(`ERROR LOGGING OUT: ${error.message}`);
    }

    const subies = await subjects();
    window.log(`subjies1: ${JSON.stringify(subies)}`);

    try {
      const user = await Auth.signIn(email, password);
      alert("LOGGED IN!");
      const currentUser = await Auth.currentAuthenticatedUser();
      const currentCredentials = await Auth.currentCredentials();
      // window.log(`CurrentCred: ${JSON.stringify(currentCredentials)}`);
      const s = await subjects();
      window.log(`subies@@@@: ${JSON.stringify(s)}`);
    } catch (error) {
      window.log(`ERROR LOGGING IN: ${error.message}`);
    }
  };

  const mutate = async () => {
    const subject = {
      type: "post",
      title: "FROM CLIENT",
      subjectContent: "SubCont"
    };

    try {
      const data = await API.graphql(
        graphqlOperation(createSubject, { input: subject })
      );
      window.log(`mutation data: ${data}`);
    } catch (error) {
      window.log(`Error doing mutation: ${error.message}`);
    }
  };

  const LogOut = async () => {
    try {
      await Auth.signOut();
      window.log(`Logged out`);
    } catch (error) {
      window.log(`ERROR LOGGING OUT: ${error.message}`);
    }
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
      <SignInButton onClick={LogIn}>LOG IN</SignInButton>
      <ActionButton onClick={mutate}>Mutate</ActionButton>
      <ActionButton onClick={LogOut}>Log out</ActionButton>
      <BottomLineWrapper />
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
