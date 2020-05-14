import React, { useState, useEffect } from "react";
import styled from "styled-components";
import UserPic from "components/Primitive/SubjectCard/UserPic";
import Logo from "assets/General/Logo.svg";

import { useUser } from "CustomHooks/user";

const Wrapper = ({ createdBy, ...props }) => {
  const [userPic, setUserPic] = useState(null);

  const { getUserAvatar } = useUser();

  const fetchUserPic = async (id) => {
    const key = `userAvatars-small-150x150/${id}`;
    const avatar = await getUserAvatar(key);
    setUserPic(avatar);
  };

  useEffect(() => {
    fetchUserPic(createdBy);
  }, []);

  return (
    <div {...props}>
      <UserPic
        src={userPic}
        onError={(event) => {
          event.target.src = Logo;
          event.target.style = "height: 24px; width: 24px";
        }}
      />
    </div>
  );
};

const ProfPicSubjectCard = styled(Wrapper)`
  /* border: 1px solid green; */
  /* background-color: red; */
  clip-path: circle(13px at center);
  /* max-width: 24px;
  width: auto;
  height: 24px; */

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ProfPicSubjectCard;
