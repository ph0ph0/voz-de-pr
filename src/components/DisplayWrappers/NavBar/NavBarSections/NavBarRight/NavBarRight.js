import React from "react";
import styled from "styled-components";

import { useUser } from "CustomHooks/user";
import { useHistory } from "react-router-dom";

import SignUpInButtonWrapper from "./SignUpInButtonWrapper";
import ProfileWrapper from "./ProfileWrapper";
import LogoutButton from "components/Primitive/NavBar/LogoutButton";
import { useLanguage } from "CustomHooks/useLanguage";
import TranslationSwitch from "components/DisplayWrappers/TranslationSwitch/TranslationSwitch";

const displayText = {
  en: "LOG OUT",
  sp: "CERRAR SESIÓN"
};

const Wrapper = props => {
  const { user, logout } = useUser();
  const history = useHistory();

  const { language } = useLanguage();

  const logUserOut = () => {
    history.push({
      pathname: "/"
    });
    logout();
  };

  return (
    <div {...props}>
      <TranslationSwitch />
      {user ? (
        <LogoutButton onClick={logUserOut}>
          {language === "spanish" ? displayText.sp : displayText.en}
        </LogoutButton>
      ) : (
        <>
          <SignUpInButtonWrapper />
        </>
      )}
      {user ? <ProfileWrapper user={user} /> : null}
    </div>
  );
};

const NavBarRight = styled(Wrapper)`
  /* background-color: orange; */
  height: 72px;
  flex-shrink: 1;
  flex-grow: 2;
  flex-basis: 33.3333%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export default NavBarRight;
