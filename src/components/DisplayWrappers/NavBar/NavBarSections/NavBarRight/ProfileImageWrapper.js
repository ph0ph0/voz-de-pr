import React, { useEffect, useState } from "react";
import styled from "styled-components";

import retry from "async/retry";

import LoadingSpinner from "components/Primitive/General/LoadingSpinner";
import { useUser } from "CustomHooks/user";

import Logo from "assets/General/Logo.svg";

const Wrapper = props => {
  const [avatarURL, setAvatarURL] = useState("");

  const { loading, user, getUserAvatar, refreshUser } = useUser();

  useEffect(() => {
    window.log("Fetching avatar...");

    retry(
      { times: 10, interval: 5000 },
      checkAvatarAndFetch,
      async (error, _) => {
        if (error) {
          window.log(`Error, retried max number of times: ${error}`);
          throw error;
        }
        if (user.avatar && user.avatar.key) {
          const userAvatarKey = user.avatar.key;
          fetchAvatarURL(userAvatarKey);
        }
      }
    );
  }, [user]);

  const checkAvatarAndFetch = async () => {
    window.log(`Checking and/or fetching avatar`);
    if (user.avatar && user.avatar.key) {
      window.log(`User has an avatar, exiting check and refresh user`);
      return;
    }
    try {
      window.log("User did not have an avatar key");
      await refreshUser();
      if (user.avatar && user.avatar.key === null) {
        window.log(`User avatar was null...`);
        throw Error("User avatar is null...");
      }
      return;
    } catch (error) {
      window.log(`Error checking the avatar: ${error}`);
    }
  };

  const fetchAvatarURL = async userAvatarKey => {
    if (!userAvatarKey) {
      window.log("No key to fetch avatar picture, aborting!");
      return;
    }
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
        <ProfileImage
          src={avatarURL}
          onError={event => (event.target.src = Logo)}
        />
      )}
    </div>
  );
};

const ProfileImage = styled.img`
  /* border: 1px solid green; */
  object-fit: cover;
  height: 40px;
  width: 40px;
  /* overflow: hidden; */
`;

const ProfileImageWrapper = styled(Wrapper)`
  /* border: 1px solid red; */
  /* width: 200px; */
  height: 95%;

  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: circle(20px at center);
  margin-left: 24px;
`;

export default ProfileImageWrapper;
