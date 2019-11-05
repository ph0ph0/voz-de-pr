import React from 'react'
import { storiesOf } from '@storybook/react'

import SubjectDetailNoOfVotes from '../SubjectDetailNoOfVotes'

storiesOf('Primitive|text/SubjectDetailNoOfVotes', module)
    .add('Cause', () => <SubjectDetailNoOfVotes>147 VOTES</SubjectDetailNoOfVotes>)
    .add('Post', () => <SubjectDetailNoOfVotes secondary>147 VOTES</SubjectDetailNoOfVotes>)