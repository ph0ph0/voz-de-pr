import React from 'react'
import { storiesOf } from '@storybook/react'

import LocationInput from '../LocationInput'
import { onChangeNameValue } from './NameInput.stories'

storiesOf("Primitive|Inputs/LocationInput", module)
    .add("Standard", () => <LocationInput locationValue = {""} onChangeLocationValue = {onChangeNameValue}/>)