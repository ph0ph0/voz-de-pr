//This is used to display the profile image in the top right of the NavBar

import React from 'react'
import styled from 'styled-components'

const Image = (props) => {
    return (
        <img {...props}/>
    )
}

const LogoNavBar = styled(Image)`
    width: 56px;
    height: 50px;
    margin-left: 0px;
    margin-right: -30px;
    border: 1px solid black;
`

export default LogoNavBar