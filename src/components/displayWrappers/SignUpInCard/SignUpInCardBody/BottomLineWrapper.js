import React from 'react'
import styled from 'styled-components'

import SwitchStateButton from '../../../Primitive/SignUpInCard/SwitchStateButton'

const BottomLineWrapperWrapper = ({ isSignUp, ...props}) => {
    return (
        <div {...props}>
            {isSignUp ? "Already got a voice on Voz de Puerto Rico?" : "New to Voz de Puerto Rico?"}<SwitchStateButton />
        </div>
    )
}

const BottomLineWrapper = styled(BottomLineWrapperWrapper)`
    color: rgba(135, 138, 140, 1.0);
    font-size: 14px;
`

export default BottomLineWrapper 