import React from 'react'
import styled from 'styled-components'

import TextField from '../../../Primitive/SignUpCard/SignUpCardTextInput'
import { ReactComponent as LogoSVG } from '../../../../assets/SignUpInCard/SignUpInLogo.svg'
import DropDown from '../DropDown/DropDown'
import AvatarInstruction from '../../../Primitive/SidePanel_Profile/Avatars/AvatarInstruction'
import Avatars from '../Avatars/Avatars'
import ActionButton from '../../../Primitive/General/ActionButton'
import BottomLineWrapper from './BottomLineWrapper'


import api from '../API/SignUpCardAPI'

const Logo = styled(LogoSVG)`
    border: 1px solid salmon;

    margin-top: 39px;
    margin-bottom: ${props => props.isSignUp ? "32px" : "111px"};
    margin-left: auto;
`

const AvatarInstructionSignUp = styled(AvatarInstruction)`
    margin-right: auto;
    margin-left: 26px;
`

const SignUpInButton = styled(ActionButton)`
    margin-top: 17px;
    margin-bottom: 19px;
`

const SignUpCardBodyWrapper = ({ isSignUp, ...props}) => {
    return (
        <div {...props}>
            <Logo isSignUp = {isSignUp}/>
            <TextField placeholder = {"Name"}/>
            <TextField placeholder = {"Username"}/>
            <TextField placeholder = {"Email"}/>
            <DropDown api = {api}/>
            <TextField placeholder = {"Password"}/>
            <AvatarInstructionSignUp api = {api}>
                Select an Avatar
            </AvatarInstructionSignUp>
            <Avatars api = {api}/>
            <SignUpInButton secondary>SIGN UP</SignUpInButton>
            <BottomLineWrapper isSignUp = {isSignUp}/>
        </div>
    )
}

const SignUpCardBody = styled(SignUpCardBodyWrapper)`
    border: 1px solid indigo;

    width: 468px;
    height: auto;

    margin-left: 41px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export default SignUpCardBody