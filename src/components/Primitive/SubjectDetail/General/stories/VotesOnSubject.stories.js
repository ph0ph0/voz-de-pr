import React from 'react'
import { storiesOf } from '@storybook/react'

import VotesOnSubject from '../VotesOnSubject'
import { VotesOnSubjectInSummary } from '../../../../DisplayWrappers/SubjectDetail/DetailSummary/DetailSummary'

storiesOf('Primitive|text/SubjectDetailVotesOnSubject', module)
    .add('DetailHeading_Cause', () => <VotesOnSubject votesOnSubject = {1234}/>)
    .add('DetailHeading_Post', () => <VotesOnSubject secondary votesOnSubject = {1234}/>)
    .add('DetailSummary_Cause', () => <VotesOnSubjectInSummary secondary votesOnSubject = {1234}/>)
    .add('DetailSummary_Post', () => <VotesOnSubjectInSummary secondary votesOnSubject = {1234}/>)