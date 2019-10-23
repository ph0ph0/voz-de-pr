import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const NameInputWrapper = ({ nameValue, onChangeNameValue, ...props }) => {
    return (
      <input
        placeholder="Name"
        value={nameValue}
        onChange={onChangeNameValue}
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
    nameValue: PropTypes.string.isRequired,
    onChangeNameValue: PropTypes.func.isRequired
}

  export default NameInput