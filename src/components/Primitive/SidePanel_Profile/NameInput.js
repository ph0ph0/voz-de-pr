import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const NameInputWrapper = ({ api, ...props }) => {
    return (
      <input
        placeholder="Name"
        value={api.name}
        onChange={(event) => api.updateNameValue(event.target.value)}
        {...props}
      />
    );
  };
  
const NameInput = styled(NameInputWrapper)`
    border-radius: 5px;
    border: 1px solid #d8d8d8;
    width: auto;
    height: 37px;

    margin-top: 0px;
    margin-bottom: 13px;

    line-height: 2.4em;
    font-size: 16px;

    padding-left: 25px;

    :focus {
        outline: 0;
    }
`;

NameInput.propTypes = {
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

  export default NameInput