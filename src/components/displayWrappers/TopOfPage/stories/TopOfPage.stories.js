import React from 'react'
import { storiesOf } from '@storybook/react'

import TopOfPage from '../TopOfPage'

storiesOf("DisplayWrappers|TopOfPage/TopOfPage", module)
    .add("Standard", () => <TopOfPage>Home Feed</TopOfPage>, {
        notes: "This is the header for most of the pages"
    })
    .add("Profile", () => <TopOfPage profileType>My Profile</TopOfPage>)