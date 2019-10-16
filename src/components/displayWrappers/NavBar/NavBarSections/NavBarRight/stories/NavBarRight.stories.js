import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import NavBarRight from '../NavBarRight'

storiesOf("DisplayWrappers|NavBar/NavBarRight", module)
    .add("Standard", () => <BrowserRouter><NavBarRight /></BrowserRouter>, {
        notes: "This is the top most wrapper for the right section of the NavBar. It wraps around the SignUpInButtonWrapper and the ProfileInfoWrapper"
    })