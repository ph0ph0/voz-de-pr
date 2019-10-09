import React from 'react'
import { storiesOf } from '@storybook/react'

import ProfileWrapper from '../ProfileWrapper'

storiesOf("DisplayWrappers|NavBar/ProfileWrapper", module)
    .add("Standard", () => <ProfileWrapper />)