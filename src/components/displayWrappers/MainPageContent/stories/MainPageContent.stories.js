import React from 'react'
import { storiesOf } from '@storybook/react'

import MainPageContent from '../MainPageContent'

storiesOf("DisplayWrappers|MainPageContent/MainPageConent", module)
    .add("Standard", () => <MainPageContent />, {
        notes: "*PROPS; None*"
    })