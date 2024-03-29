import React from "react";
import styled from "styled-components";

import { ReactComponent as UploadProfPicSVG } from "assets/General/ProfPicSelector.svg";

const ProfilePicSelectorWrapper = ({ api, ...props }) => {
  return (
    <div {...props}>
      <UploadProfilePicButton
        data-testid="uploadProfilePicButton"
        htmlFor="fileinput"
      >
        {api.avatar ? (
          <ProfPicWrapper>
            <ProfPic src={api.selectedAvatar} />
          </ProfPicWrapper>
        ) : (
          <UploadProfPicSVG />
        )}
      </UploadProfilePicButton>
      <FileInput
        type="file"
        accept="image/png, image/jpeg"
        id="fileinput"
        onChange={event => api.updateAvatar(event.target.files)}
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

const ProfPicWrapper = styled.div`
  clip-path: circle(50px at center);
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfPic = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProfilePicSelector = styled(ProfilePicSelectorWrapper)``;

export default ProfilePicSelector;
