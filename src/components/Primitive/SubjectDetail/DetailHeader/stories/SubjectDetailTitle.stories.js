import React from 'react'
import { storiesOf } from '@storybook/react'

import SubjectDetailTitle from '../SubjectDetailTitle'

storiesOf('Primitive|text/SubjectDetailTitle', module)
    .add('Standard', () => <SubjectDetailTitle>Test</SubjectDetailTitle>)