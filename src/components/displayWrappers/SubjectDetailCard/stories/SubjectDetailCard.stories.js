import React from 'react'
import { storiesOf } from '@storybook/react'

import SubjectDetailCard from '../SubjectDetailCard'

import { CauseOnly, PostOnly } from '../../../../Constants/MockSubjectsData'

const causeSubject = CauseOnly[0]
const postSubject = PostOnly[0]

storiesOf('DisplayWrappers|SubjectDetail/SubjectDetail', module)
    .add('Cause', () => <SubjectDetailCard subject = {causeSubject}/>)
    .add('Post', () => <SubjectDetailCard secondary subject = {causeSubject}/>)