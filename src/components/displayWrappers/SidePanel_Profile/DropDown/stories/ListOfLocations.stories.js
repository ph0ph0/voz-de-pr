import React from 'react'
import { storiesOf } from '@storybook/react'

import ListOfLocations from '../ListOfLocations'
import { onChangeNameValue } from '../../../../Primitive/SidePanel_Profile/stories/NameInput.stories'


storiesOf("DisplayWrappers|SidePanel_Profile/DropDown/ListOfLocations", module)
    .add("Standard", () => <ListOfLocations locationValue = {""} onLocationSelected = {onChangeNameValue}/>, {
        notes: "*PROPS; locationValue: the current location value set in the container. onLocationSelected: set the current location in the container*"
    })