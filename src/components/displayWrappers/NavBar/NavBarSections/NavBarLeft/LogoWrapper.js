import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

import {ReactComponent as Logo } from '../../../../../assets/NavBar/Logo.svg'

const Wrapper = ({staticContext, ...props}) => {

    function onClick() {
        console.log('Clicked LogoWrapper')
        props.history.push("/")
    }

    return (
        <div {...props}>
            <Logo onClick = {onClick}/>
        </div>
    )
}

const LogoWrapper = styled(Wrapper)`
    /* border: 2px solid orange; */
    height: 100%;
    width: 80%;

    display: flex;
    align-items: center;

    :hover {
        cursor: pointer;
    }
`

export default withRouter(LogoWrapper)