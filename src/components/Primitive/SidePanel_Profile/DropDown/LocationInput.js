import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const InputWrapper = ({ api, ...props }) => {
    return (
      <input
        placeholder={"Locations"}
        value={api.locationValue}
        onChange={(event) => api.updateLocationValue(event.target.value)}
        {...props}
      />
    );
  };
  
const Input = styled(InputWrapper)`
    border: none;
    /* border: 1px solid red; */
    /* Still need to add a radius to the border as otherwise it cuts off the parent radius */
    border-radius: 5px;
    width: auto;
    height: 37px;

    padding-left: 25px;

    line-height: 2.4em;
    font-size: 16px;
    margin-right: auto;

    :focus {
        outline: 0;
    }
`;

Input.propTypes = {
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
}

export default Input