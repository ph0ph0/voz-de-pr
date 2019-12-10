import React from "react";
import styled from "styled-components";

import { useUser } from "CustomHooks/user";
import { useHistory } from "react-router-dom";

import SignUpInButtonWrapper from "./SignUpInButtonWrapper";
import ProfileWrapper from "./ProfileWrapper";
import LogoutButton from "components/Primitive/NavBar/LogoutButton";

const Wrapper = props => {
  const { user, logout } = useUser();
  const history = useHistory();

  const logUserOut = () => {
    history.push({
      pathname: "/"
    });
    logout();
  };

  return (
    <div {...props}>
      {user ? (
        <LogoutButton onClick={logUserOut}>LOG OUT</LogoutButton>
      ) : (
        <SignUpInButtonWrapper />
      )}
      {user ? <ProfileWrapper /> : null}
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
  justify-content: center;
  align-items: center;
`;

export default NavBarRight;
