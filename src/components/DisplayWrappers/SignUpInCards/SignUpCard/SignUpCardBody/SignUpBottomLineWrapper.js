import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import SwitchStateButton from "components/Primitive/SignUpCard/SwitchStateButton";

import { displayText } from "./SignUpDisplayText";
import { useLanguage } from "CustomHooks/useLanguage";

const BottomLineWrapperWrapper = ({ api, ...props }) => {
  const { language } = useLanguage();

  const history = useHistory();

  function nagivateToLogIn() {
    history.push({
      pathname: "/signin"
    });
  }

  return (
    <div {...props}>
      {language === "spanish"
        ? displayText.sp.alreadyHaveProfile
        : displayText.en.alreadyHaveProfile}
      <SwitchStateButton onClick={nagivateToLogIn} isSignUp={true} />
    </div>
  );
};

const BottomLineWrapper = styled(BottomLineWrapperWrapper)`
  color: rgba(135, 138, 140, 1);
  font-size: 14px;
  /* This pushes the SignUpInCard height down so that we have a bit of space on the bottom of the card*/
  margin-bottom: 76px;
`;

export default BottomLineWrapper;
