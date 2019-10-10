import { storiesOf } from '@storybook/react'
import React from 'react'

import ProfileInfoWrapper from '../ProfileInfoWrapper'


storiesOf("DisplayWrappers|NavBar/ProfileInfoWrapper", module)
    .add("Standard", () => <ProfileInfoWrapper />, {
        notes: "This wraps around two ProfileInfoNavBar components, which represent the profile name and email"
    })
