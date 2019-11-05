import React from 'react'
import { storiesOf } from '@storybook/react'

import CommentNumberOfVotes from '../CommentNumberOfVotes'

storiesOf('Primitive/text/CommentNumberOfVotes', module)
    .add('Standard', () => <CommentNumberOfVotes noOfVotes = {10000}/>)