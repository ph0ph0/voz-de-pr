import React from 'react'
import { storiesOf } from '@storybook/react'

import CommentHeading from '../CommentHeading'

storiesOf('DisplayWrappers|SubjectDetail/CommentsSection/CommentHeading', module)
    .add('Standard', () => <CommentHeading votesOnComment = {129} name = {"James Wheeler"} timePassed = {"1 hour ago"}/>)