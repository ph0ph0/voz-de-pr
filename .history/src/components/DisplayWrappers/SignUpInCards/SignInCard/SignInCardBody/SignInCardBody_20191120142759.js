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
import gql from "graphql-tag";
import { clientConfig } from "../../../../../clientConfig";

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
  const subjectsAuth = async () => {
    var sub = null;
    try {
      sub = await API.graphql(graphqlOperation(listSubjects));
      window.log(`subjects you fucka: ${JSON.stringify(sub)}`);
    } catch (error) {
      window.log(`error fuckface: ${JSON.stringify(error)}`);
    }

    return sub;
  };

  const subjectsUnAuth = async () => {
    try {
      const { data } = await API.graphql({
        query: listSubjects,
        variables: {},
        authMode: "AWS_IAM"
      });
      window.log(`GOT THE DATA BITCH!!!: ${JSON.stringify(data)}`);
    } catch (error) {
      window.log(`Error getting unauthed subjects!: ${JSON.stringify(error)}`);
    }
  };
  const LogIn = async () => {
    const email = "test@test.com";
    const password = "1234567890";
    const newPassword = "1234567890";

    try {
      await Auth.signOut();
      window.log(`Logged out`);
    } catch (error) {
      window.log(`ERROR LOGGING OUT: ${error.message}`);
    }

    // const subies = await subjects();
    // window.log(`subjies1: ${JSON.stringify(subies)}`);

    try {
      Auth.signIn(email, password)
        .then(user => {
          if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
            const { requiredAttributes } = user.challengeParam; // the array of required attributes, e.g ['email', 'phone_number']
            Auth.completeNewPassword(
              user, // the Cognito User Object
              newPassword, // the new password
              // OPTIONAL, the required attributes
              {
                email: email,
                phone_number: "1234567890"
              }
            )
              .then(user => {
                // at this time the user is logged in if no MFA required
                console.log(user);
              })
              .catch(e => {
                console.log(e);
              });
          } else {
            // if no MFA required for the user, then the user is now logged in
            console.log(user);
          }
        })
        .catch(e => {
          console.log(e);
        });

      alert("LOGGED IN!");
      // const currentUser = await Auth.currentAuthenticatedUser();
      // const currentCredentials = await Auth.currentCredentials();
      // window.log(`CurrentCred: ${JSON.stringify(currentCredentials)}`);
      // const s = await subjects();
      // window.log(`subies@@@@: ${JSON.stringify(s)}`);
    } catch (error) {
      window.log(`ERROR LOGGING IN: ${JSON.stringify(error)}`);
    }
  };

  const mutate = async () => {
    const subject = {
      type: "post",
      title: "FROM CLIENT1",
      subjectContent: "SubCont1"
    };

    try {
      const data = await API.graphql(
        graphqlOperation(createSubject, { input: subject })
      );
      // const data = await clientConfig.mutate({
      //   mutation: gql(createSubject),
      //   variables: {
      //     input: {
      //       ...subject
      //     }
      //   }
      // });
      window.log(`mutation data: ${JSON.stringify(data)}`);
    } catch (error) {
      window.log(`Error doing mutation: ${JSON.stringify(error)}`);
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

  const gCU = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      window.log(`CurrentUser: ${JSON.stringify(user)}`);
    } catch (error) {
      window.log(`Error getting current user: ${error.message}`);
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
      <ActionButton onClick={gCU}>Get Current User</ActionButton>
      <ActionButton onClick={subjectsAuth}>Get Sub Auth</ActionButton>
      <ActionButton onClick={subjectsUnAuth}>Get Subjects UNAuth</ActionButton>
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
