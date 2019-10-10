import React from 'react'
import styled from 'styled-components'

import {ReactComponent as Logo } from '../../../../../assets/NavBar/Logo.svg'

const Wrapper = (props) => {
    return (
        <div {...props}>
            <Logo />
        </div>
    )
}

//Doesn't matter what you set the width as
const LogoWrapper = styled(Wrapper)`
    /* border: 2px solid orange; */
    height: 100%;
    width: 80%;

    display: flex;
    align-items: center;
`

export default LogoWrapper