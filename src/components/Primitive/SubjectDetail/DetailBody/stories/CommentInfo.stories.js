import React from 'react'
import { storiesOf } from '@storybook/react'

import CommentInfo from '../CommentInfo'

storiesOf('Primitive/text/SubjectDetailCommentInfo', module)
    .add('Cause', () => <CommentInfo />)
    .add('Post', () => <CommentInfo secondary/>)