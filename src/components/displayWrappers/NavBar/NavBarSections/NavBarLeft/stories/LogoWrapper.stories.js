import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { BrowserRouter } from 'react-router-dom'

import LogoWrapper from '../LogoWrapper'

export const actions = {
    onClick: action("clicked")
}

storiesOf("DisplayWrappers|NavBar/LogoWrapper", module)
    .add("Standard", () => <BrowserRouter><LogoWrapper {...actions} /></BrowserRouter>, {
        notes: "Wraps around the VdPR logo, for display purposes so that it is placed in the NavBarLeft wrapper properly"
    })