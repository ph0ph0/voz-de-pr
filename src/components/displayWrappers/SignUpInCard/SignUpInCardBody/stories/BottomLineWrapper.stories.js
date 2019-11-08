import React from 'react'
import { storiesOf } from '@storybook/react'

import BottomLineWrapper from '../BottomLineWrapper'

storiesOf('DisplayWrappers|SignUpInCard/BottomLineWrapper/BottomLineWrapper', module)
    .add('SignIn', () => <BottomLineWrapper />)
    .add('SignUp', () => <BottomLineWrapper isSignUp/>)