import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Avatar from "../../../Primitive/SidePanel_Profile/Avatars/Avatar";

const AvatarRowTwoWrapper = ({
  api,
  avatars,
  onClickAv,
  ...props
}) => {
  return (
    <div {...props}>
      {Object.keys(avatars).map(key => {
        const png = avatars[key];
        return (
          <Avatar
            src={png}
            key={key}
            tag={key}
            api={api}
            onClick={() => api.onClickAv(key)}
          />
        );
      })}
    </div>
  );
};
  
const AvatarRowWithTwo = styled(AvatarRowTwoWrapper)`
    /* border: 1px solid black; */
  
    display: flex;
    justify-content: center;
  `;

AvatarRowWithTwo.propTypes = {
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



export default AvatarRowWithTwo;