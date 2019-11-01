import React from 'react'
import { storiesOf } from '@storybook/react'

import SubjectTitle from '../SubjectTitle'

const mockApi = {
    subjectTitle: "Test",
    updateSubjectTitle: () => {}
}

storiesOf("Primitive|text/CreateSubjectSubjectTitle", module)
    .add("Standard", () => <SubjectTitle api = {mockApi}/>)