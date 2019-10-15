import React from 'react'
import { storiesOf } from '@storybook/react'

import LinkWrapper from '../LinkWrapper'
import { BrowserRouter } from 'react-router-dom'

storiesOf("DisplayWrappers|NavBar/LinkWrapper", module)
    .add("Standard", () => <BrowserRouter><LinkWrapper /></BrowserRouter>, {
        notes: "Wraps around the primitive LinkNavBar objects (Home, Causes, Posts and Profile)"
    })