import React from 'react'
import { storiesOf } from '@storybook/react'

import LinkNavBar from '../LinkNavBar'

storiesOf("Primitive|Links/LinkNavBar", module)
    .add("Standard", () => <LinkNavBar>TEST</ LinkNavBar>, {
        notes: "These are the links used in the NavBarLeft section, wrapped by the LinkWrapper"
    })
    .add("Home", () => <LinkNavBar>HOME</ LinkNavBar>)
    .add("Causes", () => <LinkNavBar>CAUSES</ LinkNavBar>)
    .add("Posts", () => <LinkNavBar>POSTS</ LinkNavBar>)
    .add("Profile", () => <LinkNavBar>PROFILE</ LinkNavBar>)