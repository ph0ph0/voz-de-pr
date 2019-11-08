import React from 'react'
import { storiesOf } from '@storybook/react'

import SignUpCardTextInput from '../SignUpCardTextInput'

storiesOf('Primitive|text/SignupCardTextInput', module)
    .add('Standard', () => <SignUpCardTextInput placeholder = {"Name"}/>)