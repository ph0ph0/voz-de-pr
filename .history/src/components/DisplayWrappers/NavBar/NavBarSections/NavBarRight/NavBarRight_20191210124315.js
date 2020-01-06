import React from "react";
import styled from "styled-components";

import { useUser } from "CustomHooks/user";

import SignUpInButtonWrapper from "./SignUpInButtonWrapper";
import ProfileWrapper from "./ProfileWrapper";
import LogoutButton from "components/Primitive/NavBar/LogoutButton";

const Wrapper = props => {
  const { user } = useUser();

  return (
    <div {...props}>
      {user ? <LogoutButton>LOG OUT</LogoutButton> : <SignUpInButtonWrapper />}
      <ProfileWrapper />
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
