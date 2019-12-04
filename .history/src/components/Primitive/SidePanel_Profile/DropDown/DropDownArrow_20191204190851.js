import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const DropDownArrowWrapper = ({ ...props }) => {
  return (
    <div {...props}>
      <FontAwesomeIcon icon={faCaretDown} color="#131415" />
    </div>
  );
};
  
const DropDownArrow = styled(DropDownArrowWrapper)`
    /* border: 1px solid orange; */
    width: auto;
    height: 37px;

    padding-right: 20px;

    margin-left: auto;

    line-height: 2.4em;
`;

export default DropDownArrow;