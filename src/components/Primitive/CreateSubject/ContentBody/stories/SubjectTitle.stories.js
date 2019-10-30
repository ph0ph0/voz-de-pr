import React from 'react'
import { storiesOf } from '@storybook/react'

import SubjectTitle from '../SubjectTitle'

storiesOf("Primitive|text/CreateSubjectSubjectTitle", module)
    .add("Standard", () => <SubjectTitle />)