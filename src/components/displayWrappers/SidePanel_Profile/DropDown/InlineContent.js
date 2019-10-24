import React from 'react'
import styled from 'styled-components'

import LocationInput from '../../../Primitive/SidePanel_Profile/DropDown/LocationInput' 
import DropDownArrow from '../../../Primitive/SidePanel_Profile/DropDown/DropDownArrow'
import ClearInput from '../../../Primitive/SidePanel_Profile/DropDown/ClearInput'

const InlineWrapper = ({
    listOpen,
    onChangeLocationValue,
    locationValue,
    resetDropDown,
    ...props
  }) => {
    return (
      <div {...props}>
        <LocationInput
          onChangeLocationValue={onChangeLocationValue}
          locationValue={locationValue}
        />
        {listOpen && <ClearInput resetDropDown={resetDropDown} />}
        <DropDownArrow />
      </div>
    );
  };
  
const InlineContent = styled(InlineWrapper)`
    /* border: 1px solid green; */
    height: auto;
    width: auto;

    color: #878a8c;
    display: flex;
    justify-content: flex-end;
`;

  export default InlineContent