import React from 'react'
import styled from 'styled-components'

import NavBarLeft from './NavBarLeft/NavBarLeft'
import NavBarCentre from './NavBarCentre/NavBarCentre'
import NavBarRight from './NavBarRight/NavBarRight'

const Wrapper = (props) => {
    return (
        <div {...props}>
            <NavBarLeft />
            <NavBarCentre placeholder = {"Fuckface"}/>
            <NavBarRight />
        </div>
    )
}

const NavBar = styled(Wrapper)`
    /* background-color: green; */
    background-color: white;
    display: flex;
    width: 100%;
    height: 72px;
    position: fixed;
    top: 0;
    padding: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);
`

export default NavBar