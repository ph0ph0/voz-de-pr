import React from 'react'
import { storiesOf } from '@storybook/react'

import SignUpInButtonWrapper from '../SignUpInButtonWrapper'

export const actions = {
    
}

storiesOf("DisplayWrappers|NavBar/SignUpInButtonWrapper", module)
    .add("Standard", () => <SignUpInButtonWrapper />, {
        notes: "This wraps around the SignUpInButtons for SignUp and LogIn"
    })