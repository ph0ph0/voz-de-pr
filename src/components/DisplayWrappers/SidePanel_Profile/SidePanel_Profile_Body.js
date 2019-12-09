import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Info from "components/Primitive/SidePanel/Info";
import Name from "components/Primitive/SidePanel_Profile/NameInput";
import DropDown from "./DropDown/DropDown";
import AvatarInstruction from "components/Primitive/SidePanel_Profile/Avatars/AvatarInstruction";
import Avatars from "./Avatars/Avatars";
import ErrorText from "components/Primitive/General/ErrorText";

//Need to modify the Info component a bit for the SP_P
const ProfileHeader = styled(Info)`
  /* border: 1px solid black; */
  width: auto;

  text-align: center;
  font-size: 18px;
`;

const SidePanelProfileBodyWrapper = ({ api, ...props }) => {
  return (
    <div {...props}>
      <ProfileHeader>Change Details</ProfileHeader>
      <Name api={api} />
      {api.dropDownIsErrored && (
        <ErrorText>Select location from the list</ErrorText>
      )}
      <DropDown data-testid="DropDown" api={api} />
      <AvatarInstruction api={api}>Select A New Avatar</AvatarInstruction>
      <Avatars api={api} />
    </div>
  );
};

const SidePanelProfileBody = styled(SidePanelProfileBodyWrapper)`
  /* border: 1px solid green; */
  width: auto;
  height: auto;

  display: flex;
  flex-direction: column;
`;

SidePanelProfileBody.propTypes = {
  api: PropTypes.shape({
    name: PropTypes.string.isRequired,
    locationValue: PropTypes.string.isRequired,
    listOpen: PropTypes.bool.isRequired,
    selectedLocation: PropTypes.string.isRequired,
    selectedAvatar: PropTypes.string,
    updateNameValue: PropTypes.func.isRequired,
    toggleList: PropTypes.func.isRequired,
    updateLocationValue: PropTypes.func.isRequired,
    onLocationSelected: PropTypes.func.isRequired,
    resetDropdown: PropTypes.func.isRequired
  })
};

export default SidePanelProfileBody;
