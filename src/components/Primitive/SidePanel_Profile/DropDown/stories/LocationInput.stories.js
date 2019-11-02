import React from 'react'
import { storiesOf } from '@storybook/react'

import LocationInput from '../LocationInput'
import { onChangeNameValue } from '../../stories/NameInput.stories'

import { mockApi } from '../../../../DisplayWrappers/SidePanel_Profile/API/__mocks__/mockApi'

storiesOf("Primitive|Inputs/LocationInput", module)
    .add("Standard", () => <LocationInput api = {mockApi}/>)