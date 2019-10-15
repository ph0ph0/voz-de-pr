import React from 'react'
import { storiesOf } from '@storybook/react'

import NavBarLeft from '../NavBarLeft'
import { BrowserRouter } from 'react-router-dom'

storiesOf("DisplayWrappers|NavBar/NavBarLeft", module)
    .add("Standard", () => <BrowserRouter><NavBarLeft /></BrowserRouter>, {
        notes: "Wraps around all of the top level wrappers: LogoWrapper and LinkWrapper"
    })