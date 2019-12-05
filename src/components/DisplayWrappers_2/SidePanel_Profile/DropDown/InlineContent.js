import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import LocationInput from "../../../Primitive/SidePanel_Profile/DropDown/LocationInput";
import DropDownArrow from "../../../Primitive/SidePanel_Profile/DropDown/DropDownArrow";
import ClearInput from "../../../Primitive/SidePanel_Profile/DropDown/ClearInput";

const InlineWrapper = ({ api, ...props }) => {
  return (
    <div {...props}>
      <LocationInput api={api} />
      {api.listOpen && <ClearInput api={api} />}
      <DropDownArrow />
    </div>
  );
};

const InlineContent = styled(InlineWrapper)`
  /* border: 1px solid green; */
  height: auto;
  width: 238px;

  color: #878a8c;
  display: flex;
  justify-content: flex-end;
`;

InlineContent.propTypes = {
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

export default InlineContent;
