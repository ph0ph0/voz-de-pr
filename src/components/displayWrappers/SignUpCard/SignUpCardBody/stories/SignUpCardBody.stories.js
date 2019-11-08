import React from 'react'
import { storiesOf } from '@storybook/react'

import SignUpCardBody from '../SignUpCardBody'

storiesOf('DisplayWrappers|SignUpCard/SignUpCardBody/SignUpCardBody', module)
    .add('Standard', () => <SignUpCardBody />)