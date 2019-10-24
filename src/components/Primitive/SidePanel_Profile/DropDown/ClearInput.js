import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";


const ClearInputWrapper = ({ onChangeValue, resetDropDown, ...props }) => {
 
    return (
      <div {...props}>
        <FontAwesomeIcon
          icon={faTimesCircle}
          color="#d8d8d8"
          onClick={resetDropDown}
        />
      </div>
    );
  };
  
  const ClearInput = styled(ClearInputWrapper)`
    /* border: 1px solid orange; */
    width: auto;
    height: 37px;
    text-align: center;
    padding-right: 10px;
  
    margin-left: auto;
  
    line-height: 2.4em;
  `;

  export default ClearInput