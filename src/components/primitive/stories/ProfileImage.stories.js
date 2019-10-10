import ProfileImage from '../ProfileImage'
import { storiesOf } from '@storybook/react'
import React from 'react'

storiesOf("Primitive|Images/ProfileImage", module)
    .add("Standard", () => <ProfileImage />, {
        notes: "The users profile image, wrapped by the ProfileImageWrapper"
    })