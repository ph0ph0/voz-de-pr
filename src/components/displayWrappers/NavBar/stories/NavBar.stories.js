import React from 'react'
import { storiesOf } from '@storybook/react'

import NavBar from '../NavBar'
import { BrowserRouter } from 'react-router-dom'

storiesOf("DisplayWrappers|NavBar/NavBar", module)
    .add("Standard", () => <BrowserRouter><NavBar /></BrowserRouter>, {
        notes: 'This is the final NavBar composed of each section (left, right and centre)'
    })