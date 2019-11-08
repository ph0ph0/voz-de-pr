import React from 'react'
import styled from 'styled-components'

import TextField from '../../../Primitive/SignUpCard/SignUpCardTextInput'
import { ReactComponent as Logo } from '../../../../assets/General/SignUpInLogo.svg'
import DropDown from '../DropDown/DropDown'
import api from '../API/SignUpCardAPI'

const SignUpCardBodyWrapper = ({...props}) => {
    return (
        <div {...props}>
            <Logo />
            <TextField placeholder = {"Name"}/>
            <TextField placeholder = {"Username"}/>
            <TextField placeholder = {"Email"}/>
            <DropDown api = {api}/>
        </div>
    )
}

const SignUpCardBody = styled(SignUpCardBodyWrapper)``

export default SignUpCardBody