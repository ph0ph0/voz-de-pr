import React from 'react'
import { storiesOf } from '@storybook/react'

import CommentsIndicator from '../CommentsIndicator'

storiesOf('Primitive|text/SubjectDetailCommentsIndicator', module)
    .add('Standard', () => <CommentsIndicator noOfComments = {36}/>)