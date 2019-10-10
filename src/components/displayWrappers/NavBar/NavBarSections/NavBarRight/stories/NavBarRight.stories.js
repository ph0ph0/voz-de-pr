import React from 'react'
import { storiesOf } from '@storybook/react'

import NavBarRight from '../NavBarRight'

storiesOf("DisplayWrappers|NavBar/NavBarRight", module)
    .add("Standard", () => <NavBarRight />, {
        notes: "This is the top most wrapper for the right section of the NavBar. It wraps around the SignUpInButtonWrapper and the ProfileInfoWrapper"
    })