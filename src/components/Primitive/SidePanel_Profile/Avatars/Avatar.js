import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

//Note that this component handles PNGs not SVGs. Hence, all SVGs sent over need to be converted to PNGs

const AvatarWrapper = ({ src, tag, api, ...props }) => {  
  return <img alt="profile" src={src} {...props} />;
};
  
const Avatar = styled(AvatarWrapper)`
    width: 73px;
    height: 73px;

    /* margin: 2px; */
    padding: 5px;

    border-radius: 100px;

    background-color: ${props => props.api.selectedAvatar === props.tag ? props.theme.primaryColour : "white"};
`;

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  selectedAvatar: PropTypes.string
};

export default Avatar;

