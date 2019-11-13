import React from "react";
import styled from "styled-components";

import SwitchStateButton from "../../../../Primitive/SignUpCard/SwitchStateButton";

const SignInBottomLineWrapper = ({ api, ...props }) => {
  const navToSignUp = () => {};

  return (
    <div {...props}>
      New to Voz de Puerto Rico?
      <SwitchStateButton onClick={navToSignUp} isSignUp={false} />
    </div>
  );
};

const SignInBottomLine = styled(SignInBottomLineWrapper)`
  color: rgba(135, 138, 140, 1);
  font-size: 14px;
  /* This pushes the SignUpInCard height down so that we have a bit of space on the bottom of the card*/
  margin-bottom: 76px;
`;

export default SignInBottomLine;
