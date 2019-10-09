import React from 'react'
import { storiesOf } from '@storybook/react'

import LinkNavBar from '../LinkNavBar'

storiesOf("Primitive|Links/LinkNavBar", module)
    .add("Standard", () => <LinkNavBar>TEST</ LinkNavBar>)
    .add("Home", () => <LinkNavBar>HOME</ LinkNavBar>)
    .add("Causes", () => <LinkNavBar>CAUSES</ LinkNavBar>)
    .add("Posts", () => <LinkNavBar>POSTS</ LinkNavBar>)
    .add("Profile", () => <LinkNavBar>PROFILE</ LinkNavBar>)