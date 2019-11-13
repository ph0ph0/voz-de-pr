import React from "react";
import styled from "styled-components";

import Logo from "../../../../Primitive/SignUpCard/SignUpLogo";
import EmailField from "../../../../Primitive/SignInCard/EmailField";
import PasswordField from "../../../../Primitive/SignInCard/PasswordField";

const SignInCardBodyWrapper = ({ ...props }) => {
  return (
    <div {...props}>
      <Logo />
      <EmailField />
      <PasswordField />
    </div>
  );
};

const SignInCard = styled(SignInCardBodyWrapper)`
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
