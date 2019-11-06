import React from 'react'
import { storiesOf } from '@storybook/react'

import VotesOnSubject from '../VotesOnSubject'
import { VotesOnSubjectInSummary } from '../../../../DisplayWrappers/SubjectDetailCard/DetailSummary/DetailSummary'

storiesOf('Primitive|text/SubjectDetailVotesOnSubject', module)
    .add('DetailHeading_Cause', () => <VotesOnSubject votesOnSubject = {1234}/>)
    .add('DetailHeading_Post', () => <VotesOnSubject secondary votesOnSubject = {1234}/>)
    .add('DetailSummary_Cause', () => <VotesOnSubjectInSummary secondary votesOnSubject = {1234}/>)
    .add('DetailSummary_Post', () => <VotesOnSubjectInSummary secondary votesOnSubject = {1234}/>)
    .add('0Votes', () => <VotesOnSubjectInSummary secondary />)
    .add('1Vote', () => <VotesOnSubjectInSummary secondary votesOnSubject = {1}/>)
    .add('ManyVotes', () => <VotesOnSubjectInSummary secondary votesOnSubject = {100}/>)
