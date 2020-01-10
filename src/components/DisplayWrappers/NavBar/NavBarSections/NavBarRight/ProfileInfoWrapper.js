//Wraps around the name and email of the current user so that it can be placed into the NavBarRight wrapper.

import React from "react";
import styled from "styled-components";

import ProfileInfoNavBar from "../../../../Primitive/NavBar/ProfileInfoNavBar";

const Wrapper = ({ user, ...props }) => {
  const firstName = user.firstName;
  const lastName = user.lastName;
  const email = user.email;
  //Split string at the @ sign
  const splitString = email.split("@");
  //Get only the first 9 characters of the email username
  const shortenedEmailUsername = splitString[0].substring(0, 10);
  //Reconstruct it
  const emailToDisplay = `${shortenedEmailUsername}***@${splitString[1]}`;

  return (
    <div className={props.className}>
      <ProfileInfoNavBar
        fontSize={"16px"}
        width={"80%"}
        height={"50%"}
        paddingTop={"15px"}
      >
        {firstName} {lastName}
      </ProfileInfoNavBar>
      <ProfileInfoNavBar
        fontSize={"12px"}
        width={"80%"}
        height={"50%"}
        paddingBottom={"15px"}
      >
        {emailToDisplay}
      </ProfileInfoNavBar>
    </div>
  );
};

const ProfileInfoWrapper = styled(Wrapper)`
  /* background-color: yellow; */
  width: 140px;
  height: 95%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ProfileInfoWrapper;
