import React from 'react'
import { storiesOf } from '@storybook/react'

import SubjectDetail from '../SubjectDetail'

storiesOf('DisplayWrappers|Pages/SubjectDetail/SubjectDetail', module)
    .add('Cause', () => <SubjectDetail type = {"CauseOnly"}/>)
    .add('Post', () => <SubjectDetail type = {"PostOnly"}/>)