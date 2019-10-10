import React from 'react'
import { storiesOf } from '@storybook/react'

import LogoWrapper from '../LogoWrapper'

storiesOf("DisplayWrappers|NavBar/LogoWrapper", module)
    .add("Standard", () => <LogoWrapper />, {
        notes: "Wraps around the VdPR logo, for display purposes so that it is placed in the NavBarLeft wrapper properly"
    })