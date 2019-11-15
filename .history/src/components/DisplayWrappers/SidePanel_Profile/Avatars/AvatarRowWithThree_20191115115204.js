import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Avatar from "../../../Primitive/SidePanel_Profile/Avatars/Avatar";

const AvatarRowThreeWrapper = ({ avatars, api, ...props }) => {
  // console.log(`cunt ${Object.keys(avatars)}`)

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

const AvatarRowWithThree = styled(AvatarRowThreeWrapper)`
  /* border: 1px solid black; */

  display: flex;
`;

AvatarRowWithThree.propTypes = {
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

export default AvatarRowWithThree;
