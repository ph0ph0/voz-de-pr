import React from 'react'
import { storiesOf } from '@storybook/react'

import ListOfLocations from '../ListOfLocations'

import { mockApi } from '../../API/__mocks__/mockApi'

storiesOf("DisplayWrappers|SidePanel_Profile/DropDown/ListOfLocations", module)
    .add("Standard", () => <ListOfLocations api = {mockApi}/>, {
        notes: "*PROPS; locationValue: the current location value set in the container. onLocationSelected: function to set the current location in the container*"
    })