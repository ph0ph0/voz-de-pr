import React from 'react'
import { storiesOf } from '@storybook/react'

import Comment from '../Comment'

const text = `We believe in conservation, not only because it protects native plants, birds and animals, but also because it protects us. After all, you simply can't be healthy in an unhealthy environment. By acting now to protect nature and prevent extinction, we can secure a better future for all.`;

storiesOf('DisplayWrappers|SubjectDetail/CommentsSection/Comment', module)
    .add('Standard', () => <Comment votesOnComment = {234} commentContent = {text} name = {"James Wheeler"} timePassed = {"1 hour ago"} noOfVotes = {123}/>)