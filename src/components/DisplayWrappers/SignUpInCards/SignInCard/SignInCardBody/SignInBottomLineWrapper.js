import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import SignInCardApiPropTypes from "../API/proptypes/SignUpCardApiPropTypes";

import SwitchStateButton from "../../../../Primitive/SignUpCard/SwitchStateButton";

const SignInBottomLineWrapper = ({ api, ...props }) => {
  const history = useHistory();

  function navigateToSignUp() {
    history.push({
      pathname: "/signup"
    });
  }

  return (
    <div {...props}>
      ¿Nuevo en voz de puerto rico?
      <SwitchStateButton onClick={navigateToSignUp} isSignUp={false} />
    </div>
  );
};

const SignInBottomLine = styled(SignInBottomLineWrapper)`
  color: rgba(135, 138, 140, 1);
  font-size: 14px;
  /* This pushes the SignUpInCard height down so that we have a bit of space on the bottom of the card*/
  margin-bottom: 76px;
`;

SignInBottomLine.propTypes = {
  api: SignInCardApiPropTypes
};

export default SignInBottomLine;
