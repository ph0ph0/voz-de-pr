import React from 'react'
import { storiesOf } from '@storybook/react'

import SwitchStateButton from '../SwitchStateButton'

storiesOf('Primitive|Buttons/SignUpInCard/SwitchStateButton', module)
    .add('Sign In Card', () => <SwitchStateButton />)
    .add('Sign Up Card', () => <SwitchStateButton isSignUp />)