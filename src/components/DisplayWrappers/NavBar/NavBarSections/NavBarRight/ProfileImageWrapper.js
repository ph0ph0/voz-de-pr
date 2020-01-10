import React, { useEffect, useState } from "react";
import styled from "styled-components";

import retry from "async/retry";

import LoadingSpinner from "components/Primitive/General/LoadingSpinner";
import { useUser } from "CustomHooks/user";

const Wrapper = props => {
  const [avatarURL, setAvatarURL] = useState("");

  const { loading, user, getUserAvatar, refreshUser } = useUser();

  useEffect(() => {
    window.log("Fetching avatar...");

    retry(5, checkAvatarAndFetch, async (error, _) => {
      if (error) {
        window.log(`Error, retried max number of times: ${error}`);
        throw error;
      }
      const userAvatarKey = user.avatar.key;
      fetchAvatarURL(userAvatarKey);
    });
  }, []);

  const checkAvatarAndFetch = async () => {
    try {
      await refreshUser();
      if (user.avatar === null) {
        throw Error("User avatar is null...");
      }
      return;
    } catch (error) {
      window.log(`Error checking the avatar: ${error}`);
    }
  };

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
