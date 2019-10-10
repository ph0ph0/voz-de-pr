import React from 'react'
import { storiesOf } from '@storybook/react'

import NavBarLeft from '../NavBarLeft'

storiesOf("DisplayWrappers|NavBar/NavBarLeft", module)
    .add("Standard", () => <NavBarLeft />, {
        notes: "Wraps around all of the top level wrappers: LogoWrapper and LinkWrapper"
    })