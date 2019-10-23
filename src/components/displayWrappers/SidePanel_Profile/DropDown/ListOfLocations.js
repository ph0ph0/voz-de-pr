import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { locations } from '../../../../Constants/Constants'
import Location from '../../../Primitive/SidePanel_Profile/DropDown/Location'

const ListOfLocationsWrapper = ({
    locationValue,
    onLocationSelected,
    ...props
  }) => {
    return (
      <ul {...props}>
        {locations.map(
          location =>
            location.title
              .toLowerCase()
              .includes(locationValue.toLowerCase()) && (
              <Location
                key={location.title}
                onClick={() => onLocationSelected(location.title)}
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
    width: 247px;
    height: auto;
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
    locationValue: PropTypes.string.isRequired,
    onLocationSelected: PropTypes.func.isRequired
}

export default ListOfLocations