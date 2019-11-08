import React from 'react'
import styled from 'styled-components'

import TextField from '../../../Primitive/SignUpCard/SignUpCardTextInput'
import { ReactComponent as LogoSVG } from '../../../../assets/General/SignUpInLogo.svg'
import DropDown from '../DropDown/DropDown'
import AvatarInstruction from '../../../Primitive/SidePanel_Profile/Avatars/AvatarInstruction'
import Avatars from '../Avatars/Avatars'
import ActionButton from '../../../Primitive/General/ActionButton'
import SwitchStateButton from '../../../Primitive/SignUpCard/SwitchStateButton'

import api from '../API/SignUpCardAPI'

const Logo = styled(LogoSVG)`
    border: 1px solid salmon;

    margin-left: auto;
`

const SignUpCardBodyWrapper = ({...props}) => {
    return (
        <div {...props}>
            <Logo />
            <TextField placeholder = {"Name"}/>
            <TextField placeholder = {"Username"}/>
            <TextField placeholder = {"Email"}/>
            <DropDown api = {api}/>
            <TextField placeholder = {"Password"}/>
            <AvatarInstruction api = {api}>
                Select an Avatar
            </AvatarInstruction>
            <Avatars api = {api}/>
            <ActionButton secondary>Sign Up</ActionButton>
            <SwitchStateButton />
        </div>
    )
}

const SignUpCardBody = styled(SignUpCardBodyWrapper)`
    margin: 1px solid indigo;
    
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default SignUpCardBody