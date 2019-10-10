import React from 'react'
import styled from 'styled-components'

import SignUpInButton from '../../../../primitive/SignUpInButton'

const Wrapper = (props) => {
    return (
        <div {...props}>
            <SignUpInButton secondary >SIGN UP</SignUpInButton>
            <SignUpInButton>LOG IN</SignUpInButton>
        </div>
    )
}

const SignUpInButtonWrapper = styled(Wrapper)`
    /* background-color: blue; */
    height: 100%;
    width: 40%;
    padding-left: 10px;
    margin-right: -15px;

    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export default SignUpInButtonWrapper