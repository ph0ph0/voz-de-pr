import React from "react";
import styled from "styled-components";

import { ReactComponent as ProfileImage } from "../../../../../assets/NavBar/Userpic.svg";

const Wrapper = props => {
  return (
    <div {...props}>
      <ProfileImage />
    </div>
  );
};

const ProfileImageWrapper = styled(Wrapper)`
  /* border: 1px solid red; */
  width: 40px;
  height: 95%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ProfileImageWrapper;
