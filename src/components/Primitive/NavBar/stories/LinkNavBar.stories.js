import React from 'react'
import { storiesOf } from '@storybook/react'

import LinkNavBar from '../LinkNavBar'

storiesOf("Primitive|Links/LinkNavBar", module)
    .add("Standard", () => <LinkNavBar to = {"/"}>TEST</ LinkNavBar>, {
        notes: "These are the links used in the NavBarLeft section, wrapped by the LinkWrapper"
    })
    .add("Home", () => <LinkNavBar to = {"/"}>HOME</ LinkNavBar>)
    .add("Causes", () => <LinkNavBar to = {"/causes"}>CAUSES</ LinkNavBar>)
    .add("Posts", () => <LinkNavBar to = {"/posts"}>POSTS</ LinkNavBar>)
    .add("Profile", () => <LinkNavBar to = {"/profile"}>PROFILE</ LinkNavBar>)