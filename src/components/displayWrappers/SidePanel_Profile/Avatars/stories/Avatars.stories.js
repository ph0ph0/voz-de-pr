import React from 'react'
import { storiesOf } from '@storybook/react'

import Avatars from '../Avatars'

const onClickAv = () => {
    
}

storiesOf("DisplayWrappers|SidePanel_Profile/Avatars/Avatars", module)
    .add("Standard", () => <Avatars selectedAvatar = {1} onClickAv = {onClickAv}/>, {
        notes: "*PROPS; selectedAvatar, onClickAv* This is the avatar display for the SidePanel_Profile"
    })