import React from 'react'
import { storiesOf } from '@storybook/react'

import TopOfPage from '../TopOfPage'

storiesOf("DisplayWrappers|TopOfPage/TopOfPage", module)
    .add("Standard", () => <TopOfPage profileType = {false} shouldShowFilters = {true}>Home Feed</TopOfPage>, {
        notes: "*PROPS; children: The text of the title, profileType: boolean if true, it shows the filters for the profile page.* This is the header for most of the pages"
    })
    .add("Profile", () => <TopOfPage profileType shouldShowFilters = {true}>My Profile</TopOfPage>)
    .add("CreatePage", () => <TopOfPage profileType shouldShowFilters = {false}>Create a Cause</TopOfPage>)