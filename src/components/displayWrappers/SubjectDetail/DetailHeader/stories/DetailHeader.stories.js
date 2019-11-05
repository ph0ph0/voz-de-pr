import React from 'react'
import { storiesOf } from '@storybook/react'

import DetailHeader from '../DetailHeader'

storiesOf('DisplayWrappers|SubjectDetail/DetailHeader/DetailHeader', module)
    .add('Cause', () => <DetailHeader />)
    .add('Post', () => <DetailHeader secondary/>)