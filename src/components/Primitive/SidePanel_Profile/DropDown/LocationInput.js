import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const InputWrapper = ({ onChangeLocationValue, locationValue, ...props }) => {
    return (
      <input
        placeholder={"Locations"}
        value={locationValue}
        onChange={onChangeLocationValue}
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
    onChangeLocationValue: PropTypes.func.isRequired,
    locationValue: PropTypes.string.isRequired
}

export default Input