import React from 'react'
import { storiesOf } from '@storybook/react'

import DetailSummary from '../DetailSummary'

storiesOf('DisplayWrappers|SubjectDetail/DetailSummary/DetailSummary', module)
    .add('Cause', () => <DetailSummary noOfComments = {12} votesOnSubject = {37} subjectID = {"1234567890"}/>)
    .add('Post', () => <DetailSummary noOfComments = {12} votesOnSubject = {37} subjectID = {"1234567890"} secondary/>)