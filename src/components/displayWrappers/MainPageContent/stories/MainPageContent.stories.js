import React from 'react'
import { storiesOf } from '@storybook/react'

import MainPageContent from '../MainPageContent'

storiesOf("DisplayWrappers|MainPageContent/MainPageConent", module)
    .add("Standard", () => <MainPageContent />, {
        notes: "*PROPS; pageTitle: The title of the page to be shown, profileType: bool determines the type of the Filters*"
    })