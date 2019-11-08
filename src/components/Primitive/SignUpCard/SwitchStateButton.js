import React from 'react'
import styled from 'styled-components'

const SwitchStateButtonWrapper = ({ isSignUp, ...props}) => {
    return (
        <button {...props}>{isSignUp ? "LOG IN" : "SIGN UP"}</button>
    )
}

const SwitchStateButton = styled(SwitchStateButtonWrapper)`
    border: 1px solid red;

    font-size: 14px;

    margin: 0px;
    padding: 0px;

    color: ${props => props.isSignUp ? props.theme.primaryColour : props.theme.secondaryColour};
`

export default SwitchStateButton