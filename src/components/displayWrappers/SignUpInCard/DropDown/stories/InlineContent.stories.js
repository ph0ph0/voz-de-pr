import React from 'react'
import { storiesOf } from '@storybook/react'

import InlineContent from '../InlineContent'

import { mockApi } from '../../API/__mocks__/mockApi'

storiesOf("DisplayWrappers|SignUpInCard/DropDown/InlineContent", module)
    .add("Standard", () => <InlineContent api = {mockApi}/>, {
        notes: "*PROPS; locationValue: the current location value set in the container. onChangeLocationValue: function to set the current location in the container when the value is selected*"
    })