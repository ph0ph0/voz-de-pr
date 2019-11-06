import React from 'react'
import { storiesOf } from '@storybook/react'

import DetailHeaderTopLine from '../DetailHeaderTopLine'

storiesOf('DisplayWrappers|SubjectDetail/DetailHeader/DetailHeaderTopLine', module)
    .add('Standard', () => <DetailHeaderTopLine />)