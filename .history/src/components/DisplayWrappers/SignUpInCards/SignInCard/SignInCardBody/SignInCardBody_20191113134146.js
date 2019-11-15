import React from "react";
import styled from "styled-components";

import Logo from "../../../../Primitive/SignInCard/SignInLogo";
import EmailField from "../../../../Primitive/SignInCard/EmailField";
import PasswordField from "../../../../Primitive/SignInCard/PasswordField";
import ActionButton from "../../../../Primitive/General/ActionButton";
import BottomLineWrapper from "./SignInBottomLineWrapper";

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
  return (
    <div {...props}>
      <Logo />
      <EmailField
        placeholder={"Email"}
        value={api.emailValue}
        onChange={api.updateEmailValue}
      />
      <PasswordField
        placeholder={"Password"}
        value={api.passwordValue}
        onChange={api.updatePasswordValue}
      />
      <SignInButton>LOG IN</SignInButton>
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

// SignUpCardBody.propTypes = {
//   api: SignUpInCardApiPropTypes
// };

export default SignInCard;