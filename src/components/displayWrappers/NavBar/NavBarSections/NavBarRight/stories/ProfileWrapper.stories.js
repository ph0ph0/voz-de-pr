import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import ProfileWrapper from '../ProfileWrapper'

storiesOf("DisplayWrappers|NavBar/ProfileWrapper", module)
    .add("Standard", () => <BrowserRouter><ProfileWrapper /></BrowserRouter>, {
        notes: "This wraps around the ProfileInfoWrapper and the ProfileImageWrapper"
    })