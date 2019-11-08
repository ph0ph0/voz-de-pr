import React from 'react'
import styled from 'styled-components'

import { ReactComponent as SidePanelSVG } from '../../../assets/SignUpInCard/SVG_SignUpInSidePanel.svg'
import SignUpCardBody from './SignUpCardBody/SignUpCardBody'

const SignUpInCardWrapper = ({isSignUp, ...props}) => {

    return (
        <div {...props}>
            <SidePanel isSignUp = {isSignUp}/>
            <SignUpCardBody isSignUp = {isSignUp}/>
        </div>
    )
}

const SidePanel = styled(SidePanelSVG)`
    margin-top: ${props => props.isSignUp ? "0px" : "-100px;"};
`

const SignUpInCard = styled(SignUpInCardWrapper)`
    /* border: 1px solid black; */
    width: 752px;
    height: auto;

    overflow: hidden;

    /* padding-bottom: 30px; */

    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);

    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    /* align-items: center; */
`

export default SignUpInCard