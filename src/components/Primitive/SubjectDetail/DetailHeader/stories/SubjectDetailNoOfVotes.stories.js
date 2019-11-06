import React from 'react'
import { storiesOf } from '@storybook/react'

import SubjectDetailNoOfVotes from '../SubjectDetailNoOfVotes'

storiesOf('Primitive|text/SubjectDetailNoOfVotesss', module)
    .add('Cause', () => <SubjectDetailNoOfVotes noOfVotesOnSubject = {123}/>)
    .add('Post', () => <SubjectDetailNoOfVotes secondary noOfVotesOnSubject = {123}/>)