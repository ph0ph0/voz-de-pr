import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import { SignUpInCardApiPropTypes } from "../API/proptypes/SignUpCardApiPropTypes";

import InlineContent from "./InlineContent";
import ListOfLocations from "./ListOfLocations";

const DropDownWrapper = ({ api, ...props }) => {
  const node = useRef(null);

  useEffect(() => {
    if (api.listOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [api.listOpen]);

  const handleClickOutside = event => {
    if (node.current.contains(event.target)) {
      //Click was inside the dropdown
      return;
    }
    //Click was outside the dropdown
    api.toggleList();
  };

  return (
    <div ref={node} {...props}>
      <InlineContent api={api} onClick={api.toggleList} />
      {api.listOpen && <ListOfLocations api={api} />}
    </div>
  );
};

const DropDown = styled(DropDownWrapper)`
  background-color: white;
  border-radius: 5px;
  width: ${props => (props.api.listOpen ? "468px" : "100%")};
  height: auto;

  padding: 0px;
  margin-bottom: 20px;

  border-style: solid;
  border-width: 1px;
  border-color: ${props => (props.api.listOpen ? "#96C8DA" : "#d8d8d8")};
  box-shadow: ${props =>
    props.api.listOpen ? "0 0 10px rgba(0, 0, 0, 0.12)" : "0 "};
  z-index: 1000;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

DropDown.propTypes = {
  api: SignUpInCardApiPropTypes
};

export default DropDown;
