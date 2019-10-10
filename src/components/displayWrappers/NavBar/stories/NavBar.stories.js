import React from 'react'
import { storiesOf } from '@storybook/react'

import NavBar from '../NavBar'

storiesOf("DisplayWrappers|NavBar/NavBar", module)
    .add("Standard", () => <NavBar />, {
        notes: 'This is the final NavBar composed of each section (left, right and centre)'
    })