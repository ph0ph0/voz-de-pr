import React from 'react'
import { storiesOf } from '@storybook/react'

import ContentBody from '../ContentBody'

const mockApi = {
    subjectTitle: "Test",
    subjectContent: "Test",
    updateSubjectTitle: () => {},
    updateSubjectContent: () => {}
}

storiesOf("DisplayWrappers|CreateSubject/ContentBody/ContentBody", module)
    .add("Standard", () => <ContentBody api = {mockApi}/>, {
        notes: "*PROPS; secondary: bool for cause (red) or post (blue) colour*"
    })