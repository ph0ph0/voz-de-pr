import SignUpInCard from '../DisplayWrappers/SignUpInCard/SignUpInCard'

import React from 'react'
import styled from 'styled-components'

const SignUpInPageWrapper = ({...props}) => {
    return (
        <div {...props}>
            <SignUpInCard />
        </div>
    )
}

const SignUpIn = styled(SignUpInPageWrapper)`
    display: flex;
    justify-content: center;
`

export default SignUpIn