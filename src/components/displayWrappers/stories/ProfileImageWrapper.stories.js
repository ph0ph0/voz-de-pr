import React from 'react'
import { storiesOf } from '@storybook/react'

import ProfileImageWrapper from '../ProfileImageWrapper'

storiesOf("DisplayWrappers|NavBar/ProfileImageWrapper", module)
    .add("Standard", () => <ProfileImageWrapper />)