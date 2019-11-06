import React from 'react'
import { storiesOf } from '@storybook/react'

import VotesOnComment from '../VotesOnComment'

storiesOf('Primitive/text/VotesOnComment', module)
    .add('Standard', () => <VotesOnComment votesOnComment = {10000}/>)