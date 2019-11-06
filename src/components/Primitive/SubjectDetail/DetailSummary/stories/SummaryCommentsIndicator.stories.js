import React from 'react'
import { storiesOf } from '@storybook/react'

import SummaryCommentsIndicator from '../SummaryCommentsIndicator'

storiesOf('Primitive|text/SubjectDetailCommentsIndicator', module)
    .add('0Comments', () => <SummaryCommentsIndicator />)
    .add('1Comment', () => <SummaryCommentsIndicator noOfComments = {1}/>)
    .add('ManyComments', () => <SummaryCommentsIndicator noOfComments = {30}/>)