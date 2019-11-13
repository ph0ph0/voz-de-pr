import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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
  width: 248px;
  height: auto;

  padding: 0px;
  margin-bottom: 20px;
  /* Keeps the DropDown in place when it opens as its position will now be absolute */
  margin-top: ${props => (props.api.listOpen ? "117px" : "0px")};
  border-style: solid;
  border-width: 1px;
  border-color: ${props => (props.api.listOpen ? "#96C8DA" : "#d8d8d8")};
  /* Position absolute allows us to overlay the content below */
  position: ${props => (props.api.listOpen ? "absolute" : "relative")};
  box-shadow: ${props =>
    props.api.listOpen ? "0 0 10px rgba(0, 0, 0, 0.12)" : "0 "};
  z-index: 1000;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

DropDown.propTypes = {
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

export default DropDown;
