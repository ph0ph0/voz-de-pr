import React from 'react'
import { storiesOf } from '@storybook/react'

import ContentBody from '../ContentBody'

storiesOf("DisplayWrappers|CreateSubject/ContentBody/ContentBody", module)
    .add("Standard", () => <ContentBody />, {
        notes: "*PROPS; secondary: bool for cause (red) or post (blue) colour*"
    })