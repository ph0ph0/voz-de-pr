import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Info from "components/Primitive/SidePanel/Info";
import DropDown from "./DropDown/DropDown";
import AvatarInstruction from "components/Primitive/SidePanel_Profile/Avatars/AvatarInstruction";
import ProfPicSelector from "./Avatars/ProfPicSelector";
import ErrorText from "components/Primitive/General/ErrorText";
import { useLanguage } from "CustomHooks/useLanguage";

const displayText = {
  en: {
    changeDetails: "Change Details",
    locationError: "Select a location from the list",
    profPicInstruction: "Choose Profile Picture"
  },
  sp: {
    changeDetails: "Cambiar Detalles",
    locationError: "Seleccionar ubicación de la lista",
    profPicInstruction: "Seleccione Nueva Imagen"
  }
};

//Need to modify the Info component a bit for the SP_P
const ProfileHeader = styled(Info)`
  /* border: 1px solid black; */
  width: 249px;

  text-align: center;
  font-size: 18px;
`;

const SidePanelProfileBodyWrapper = ({ api, ...props }) => {
  const { language } = useLanguage();

  return (
    <div {...props}>
      <ProfileHeader>
        {language === "spanish"
          ? displayText.sp.changeDetails
          : displayText.en.changeDetails}
      </ProfileHeader>
      {api.dropDownIsErrored && (
        <ErrorText>
          {language === "spanish"
            ? displayText.sp.locationError
            : displayText.en.locationError}
        </ErrorText>
      )}
      <DropDown data-testid="DropDown" api={api} />
      <AvatarInstruction api={api}>
        {language === "spanish"
          ? displayText.sp.profPicInstruction
          : displayText.en.profPicInstruction}
      </AvatarInstruction>
      <ProfPicSelector api={api} />
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
    locationValue: PropTypes.string.isRequired,
    listOpen: PropTypes.bool.isRequired,
    selectedLocation: PropTypes.string.isRequired,
    selectedAvatar: PropTypes.string,
    toggleList: PropTypes.func.isRequired,
    updateLocationValue: PropTypes.func.isRequired,
    onLocationSelected: PropTypes.func.isRequired,
    resetDropdown: PropTypes.func.isRequired
  })
};

export default SidePanelProfileBody;
