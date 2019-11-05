import React from 'react'
import { storiesOf } from '@storybook/react'

import NumberOfVotes from '../NumberOfVotes'

storiesOf('Primitive|text/SubjectDetailNumberOfVotes', module)
    .add('Cause', () => <NumberOfVotes NoOfVotes = {234}/>)
    .add('Post', () => <NumberOfVotes NoOfVotes = {234} secondary/>)