import ProfileInfoWrapper from '../ProfileInfoWrapper'
import { storiesOf } from '@storybook/react'
import React from 'react'

storiesOf("DisplayWrappers|NavBar/ProfileInfoWrapper", module)
    .add("Standard", () => <ProfileInfoWrapper />)
