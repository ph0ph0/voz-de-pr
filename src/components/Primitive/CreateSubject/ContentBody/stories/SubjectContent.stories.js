import React from 'react'
import { storiesOf } from '@storybook/react'

import SubjectContent from '../SubjectContent'

const mockApi = {
    subjectContent: "Test",
    updateSubjectContent: () => {}
}

storiesOf("Primitive|text/SubjectContent", module)
    .add("Standard", () => <SubjectContent api = {mockApi}/>)