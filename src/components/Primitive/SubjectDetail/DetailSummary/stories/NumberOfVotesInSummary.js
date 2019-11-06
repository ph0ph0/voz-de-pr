import React from 'react'
import { storiesOf } from '@storybook/react'

import NumberOfVotesInSummary from '../NumberOfVotesInSummary'

storiesOf('Primitive|text/CommentNumberOfVotes', module)
    .add('Cause', () => <NumberOfVotesInSummary noOfVotesOnComment = {234}/>)
    .add('Post', () => <NumberOfVotesInSummary noOfVotesOnComment = {234} secondary/>)