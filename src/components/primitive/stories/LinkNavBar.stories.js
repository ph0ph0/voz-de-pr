import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import LinkNavBar from '../LinkNavBar'

storiesOf("Primitive|Links/LinkNavBar", module)
    .add("Standard", () => <BrowserRouter><LinkNavBar to = {"/"}>TEST</ LinkNavBar></BrowserRouter>, {
        notes: "These are the links used in the NavBarLeft section, wrapped by the LinkWrapper"
    })
    .add("Home", () => <BrowserRouter><LinkNavBar to = {"/"}>HOME</ LinkNavBar></BrowserRouter>)
    .add("Causes", () => <BrowserRouter><LinkNavBar to = {"/causes"}>CAUSES</ LinkNavBar></BrowserRouter>)
    .add("Posts", () => <BrowserRouter><LinkNavBar to = {"/posts"}>POSTS</ LinkNavBar></BrowserRouter>)
    .add("Profile", () => <BrowserRouter><LinkNavBar to = {"/profile"}>PROFILE</ LinkNavBar></BrowserRouter>)