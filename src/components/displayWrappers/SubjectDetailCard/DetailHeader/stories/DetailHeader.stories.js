import React from 'react'
import { storiesOf } from '@storybook/react'

import DetailHeader from '../DetailHeader'

storiesOf('DisplayWrappers|SubjectDetail/DetailHeader/DetailHeader', module)
    .add('Cause', () => <DetailHeader votesOnSubject = {22312}/>)
    .add('Post', () => <DetailHeader secondary votesOnSubject = {22312}/>)