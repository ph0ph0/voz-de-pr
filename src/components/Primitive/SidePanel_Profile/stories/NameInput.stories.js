import React from 'react'
import { storiesOf, action } from '@storybook/react'

import NameInput from '../NameInput'

export function onChangeNameValue(event) {
    console.log(`NameChanged to: ${event.target.value}`)
}

storiesOf("Primitive|Inputs/NameInput", module)
    .add("Standard", () => <NameInput nameValue = {""} onChangeNameValue = {onChangeNameValue} />)