import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Storage } from "aws-amplify";

import LoadingSpinner from "components/Primitive/General/LoadingSpinner";
import { useUser } from "CustomHooks/user";

const Wrapper = props => {
  const [avatarURL, setAvatarURL] = useState("");

  const { loading, user, getUserAvatar } = useUser();

  const fetchAvatarURL = async userAvatarKey => {
    try {
      window.log(`Getting avatar for userAvatarKey...: ${userAvatarKey}`);
      const userAvatarURL = await getUserAvatar(userAvatarKey);
      setAvatarURL(userAvatarURL);
      window.log("Got avatar!");
    } catch (error) {
      window.log(`Error fetching avatar url in ProfileImageWrapper: ${error}`);
    }
  };

  useEffect(() => {
    window.log("Fetching avatar...");
    const userAvatarKey = user && user.avatar && user.avatar.key;
    fetchAvatarURL(userAvatarKey);
  }, []);

  return (
    <div {...props}>
      {loading ? (
        <LoadingSpinner colour={"#1B4EA0"} />
      ) : (
        <img src={avatarURL} />
      )}
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
