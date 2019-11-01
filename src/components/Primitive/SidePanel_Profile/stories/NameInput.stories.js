import React from 'react'
import { storiesOf, action } from '@storybook/react'

import NameInput from '../NameInput'

const mockApi = {
    name: "",
    locationValue: "",
    listOpen: false,
    selectedLocation: "",
    selectedAvatar: "",
    updateNameValue: "",
    toggleList: () => {},
    updateLocationValue: () => {},
    onLocationSelected: () => {},
    resetDropdown: () => {}
}

storiesOf("Primitive|Inputs/NameInput", module)
    .add("Standard", () => <NameInput nameValue = {""} onChangeNameValue = {mockApi.onChangeNameValue} />)