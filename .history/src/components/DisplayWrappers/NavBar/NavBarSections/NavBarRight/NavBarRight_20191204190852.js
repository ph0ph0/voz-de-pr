import React from "react";
import styled from "styled-components";

import SignUpInButtonWrapper from "./SignUpInButtonWrapper";
import ProfileWrapper from "./ProfileWrapper";

const Wrapper = (props) => {
  return (
    <div {...props}>
      <SignUpInButtonWrapper />
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