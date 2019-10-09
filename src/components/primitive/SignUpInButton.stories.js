import SignUpInButton from './SignUpInButton.js'
import React from 'react'
import { action } from '@storybook/addon-actions'


export default {
    component: SignUpInButton,
    title: 'SignUpInButton'
}

export const button = () => <SignUpInButton onClick={action('clicked')}></SignUpInButton>
export const LogIn = () => <SignUpInButton onClick={action('clicked')}>LOG IN</SignUpInButton>
export const SignUp = () => <SignUpInButton onClick={action('clicked')} secondary>SIGN UP</SignUpInButton>