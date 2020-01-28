import React, { useEffect, useState, useMemo } from "react";
import styled from "styled-components";

import retry from "async/retry";

import LoadingSpinner from "components/Primitive/General/LoadingSpinner";
import { useUser } from "CustomHooks/user";

import Logo from "assets/General/Logo.svg";

const Wrapper = props => {
  const [avatarURL, setAvatarURL] = useState("");
  const [userAvatarKey, setUserAvatarKey] = useState(null);

  const { loading, user, getUserAvatar, refreshUser } = useUser();

  const checkAvatarAndFetch = async callback => {
    window.log(`Checking and/or fetching avatar`);
    if (user.avatar && user.avatar.key) {
      window.log(`User has an avatar, exiting check and refresh user`);
      throw new Error("CUNT");
    }
    try {
      window.log("User did not have an avatar key");
      await refreshUser();
      if (user.avatar && user.avatar.key === null) {
        window.log(`User avatar was null...`);
        throw new Error("User av was null");
      }
    } catch (error) {
      window.log(`Error checking the avatar: ${error}`);
      throw new Error("Error getting av");
    }
  };

  useEffect(() => {
    window.log("Fetching avatar...");

    retry(
      { times: 25, interval: 1000 },
      checkAvatarAndFetch,
      async (error, _) => {
        if (error) {
          window.log(`Error, retried max number of times: ${error}`);
          //Do nothing
        }
        window.log(
          `%%%%%%%%%%%%%%Fell through error in retry, will try fetch with userAv: ${user.avatar.key}`
        );
        // await refreshUser();
        if (user.avatar && user.avatar.key) {
          window.log(`Fetching avatar url...`);
          const userAvatarKey = user.avatar.key;
          await fetchAvatarURL(userAvatarKey);
        } else {
          window.log(`Couldn't retry fetchAvatarURL: ${user.avatar.key}`);
        }
      }
    );
  }, [user]);

  const fetchAvatarURL = async userAvatarKey => {
    window.log(
      `$$$$$$$$$$$$$$$$$$$$$$$$$$$fetchAvatarURL initiated with key: ${userAvatarKey}`
    );
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
