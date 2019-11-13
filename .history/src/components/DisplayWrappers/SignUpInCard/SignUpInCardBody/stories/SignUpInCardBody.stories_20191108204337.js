import React from 'react'
import { storiesOf } from '@storybook/react'

import SignUpInCardBody from '../SignUpInCardBody'

storiesOf('DisplayWrappers|SignUpInCard/SignUpInCardBody/SignUpInCardBody', module)
    .add('Standard', () => <SignUpInCardBody />)