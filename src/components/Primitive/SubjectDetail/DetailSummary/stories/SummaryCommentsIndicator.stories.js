import React from 'react'
import { storiesOf } from '@storybook/react'

import SummaryCommentsIndicator from '../SummaryCommentsIndicator'

storiesOf('Primitive|text/SubjectDetailCommentsIndicator', module)
    .add('Standard', () => <SummaryCommentsIndicator noOfCommentsOnSubject = {36}/>)