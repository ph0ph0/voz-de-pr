import React from 'react'
import { storiesOf } from '@storybook/react'

import DropDown from '../DropDown'

const onChangeLocationValue = () => {
    
}

storiesOf("DisplayWrappers|SidePanel_Profile/DropDown/DropDown", module)
    .add("Standard", () => <DropDown locationValue = {""} onChangeLocationValue = {onChangeLocationValue}/>, {
        notes: "*Props; toggleList: function to open and close the list, onChangeLocationValue: keeps track of the locationInput value, locationValue:, onLocationSelected: function for setting the selected location in the dropdown, resetDropDown:* This is the dropdown for the SidePanel_Profile"
    })