import React from 'react'
import { storiesOf } from '@storybook/react'

import ProfileWrapper from '../ProfileWrapper'

storiesOf("DisplayWrappers|NavBar/ProfileWrapper", module)
    .add("Standard", () => <ProfileWrapper />, {
        notes: "This wraps around the ProfileInfoWrapper and the ProfileImageWrapper"
    })