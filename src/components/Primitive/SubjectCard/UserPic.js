import React from "react";
import styled from "styled-components";

const UserPicWrapper = ({ src, ...props }) => {
  return <img {...props} src={src} />;
};

const UserPic = styled(UserPicWrapper)`
  height: 28px;
  width: 28px;
  object-fit: cover;
`;

export default UserPic;
