import React from 'react'
import { storiesOf } from '@storybook/react'

import ClearInput from '../ClearInput'

storiesOf("Primitive|Images/ClearInput", module)
    .add("Standard", () => <ClearInput />, {
        notes: "This is the clear input button for the Location drop down of the SidePanel_Profile"
    })