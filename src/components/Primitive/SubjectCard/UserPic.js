import React from "react";
import styled from "styled-components";

const UserPicWrapper = ({ src, ...props }) => {
  return <img {...props} src={src} />;
};

const UserPic = styled(UserPicWrapper)`
  clip-path: circle(13px at center);
  height: 28px;
`;

export default UserPic;
