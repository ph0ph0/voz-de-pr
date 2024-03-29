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
  max-width: 60%;
  height: 100%;
  flex-shrink: 5;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

export default withRouter(ProfileWrapper);
