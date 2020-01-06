import React from "react";
import styled from "styled-components";

import { ReactComponent as UploadProfPicSVG } from "assets/General/ProfPicSelector.svg";

const ProfilePicSelectorWrapper = ({ api, ...props }) => {
  return (
    <div {...props}>
      <UploadProfilePicButton api={api} htmlFor="fileinput">
        <UploadProfPicSVG />
      </UploadProfilePicButton>
      <FileInput
        type="file"
        accept="image/png, image/jpeg"
        id="fileinput"
        onChange={event => api.updateSubjectImage(event.target.files)}
      />
    </div>
  );
};

const UploadProfilePicButton = styled.label`
  :hover {
    cursor: pointer;
  }
`;

const FileInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

const ProfPic = styled.img``;

const ProfilePicSelector = styled(ProfilePicSelectorWrapper)``;

export default ProfilePicSelector;
