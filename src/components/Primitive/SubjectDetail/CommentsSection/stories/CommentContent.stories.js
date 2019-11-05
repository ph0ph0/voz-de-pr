import React from 'react'
import { storiesOf } from '@storybook/react'

import CommentContent from '../CommentContent'

storiesOf('Primitive|text/CommentContent', module)
    .add('Standard', () => <CommentContent commentContent = {"Jabba flabba"} />)