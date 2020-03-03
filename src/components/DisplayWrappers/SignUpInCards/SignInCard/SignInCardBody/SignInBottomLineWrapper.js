import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import SignInCardApiPropTypes from "../API/proptypes/SignUpCardApiPropTypes";

import SwitchStateButton from "components/Primitive/SignUpCard/SwitchStateButton";
import { useLanguage } from "CustomHooks/useLanguage";

const displayText = {
  en: {
    newToVdPR: "New to Voz de Puerto Rico?"
  },
  sp: {
    newToVdPR: "¿Nuevo en voz de puerto rico?"
  }
};

const SignInBottomLineWrapper = ({ api, ...props }) => {
  const history = useHistory();
  const { language } = useLanguage();

  function navigateToSignUp() {
    history.push({
      pathname: "/signup"
    });
  }

  return (
    <div {...props}>
      {language === "spanish"
        ? displayText.sp.newToVdPR
        : displayText.en.newToVdPR}
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
