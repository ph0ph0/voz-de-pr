import React from 'react'
import { storiesOf } from '@storybook/react'

import SubjectTitle from '../SubjectTitle'

import { mockApi } from '../../../../DisplayWrappers/CreateSubject/API/__mocks__/mockApi'

storiesOf("Primitive|text/CreateSubjectSubjectTitle", module)
    .add("Standard", () => <SubjectTitle api = {mockApi}/>)