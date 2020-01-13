import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import ProfileInfoWrapper from "./ProfileInfoWrapper";
import ProfileImageWrapper from "./ProfileImageWrapper";

const Wrapper = ({ staticContext, user, ...props }) => {
  //staticContext allows props.history.push()
  function onClick() {
    console.log("Clicked Profile Wrapper");
    props.history.push("/profile");
  }

  return (
    <div {...props} onClick={onClick}>
      <ProfileImageWrapper />
      <ProfileInfoWrapper user={user} />
    </div>
  );
};

const ProfileWrapper = styled(Wrapper)`
  /* background-color: blue; */
  width: 60%;
  height: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

export default withRouter(ProfileWrapper);
