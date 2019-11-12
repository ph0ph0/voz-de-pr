import React from "react";
import styled from "styled-components";

import { SignUpInCardApiPropTypes } from "../API/proptypes/SignUpInCardApiPropTypes";

import { locations } from "../../../../Constants/Constants";
import Location from "../../../Primitive/SidePanel_Profile/DropDown/Location";

const ListOfLocationsWrapper = ({ api, ...props }) => {
  return (
    <ul {...props}>
      {locations.map(
        location =>
          location.title
            .toLowerCase()
            .includes(api.locationValue.toLowerCase()) && (
            <Location
              key={location.title}
              onClick={() => api.onLocationSelected(location.title)}
            >
              {location.title}
            </Location>
          )
      )}
    </ul>
  );
};

const ListOfLocations = styled(ListOfLocationsWrapper)`
  /* background-color: green;
    border: 1px solid #d8d8d8; */
  width: auto;
  height: 150px;
  max-height: 150px;

  padding: 0px;
  margin: 0px;

  border-radius: 5px;

  text-align: left;
  /* margin-top: 330px; */
  padding: 0px;
  overflow: scroll;
  list-style-type: none;
`;

ListOfLocations.propTypes = {
  api: SignUpInCardApiPropTypes
};

export default ListOfLocations;
