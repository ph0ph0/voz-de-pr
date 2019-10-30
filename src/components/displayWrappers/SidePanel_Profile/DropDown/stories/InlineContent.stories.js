import React from 'react'
import { storiesOf } from '@storybook/react'

import InlineContent from '../InlineContent'

const onChangeLocationValue = () => {
    
}


storiesOf("DisplayWrappers|SidePanel_Profile/DropDown/InlineContent", module)
    .add("Standard", () => <InlineContent locationValue = {""} onChangeLocationValue = {onChangeLocationValue}/>, {
        notes: "*PROPS; locationValue: the current location value set in the container. onChangeLocationValue: function to set the current location in the container when the value is selected*"
    })