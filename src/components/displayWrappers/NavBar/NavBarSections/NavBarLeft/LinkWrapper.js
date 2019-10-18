import React from 'react'
import styled from 'styled-components'

import LinkNavBar from '../../../../Primitive/NavBar/LinkNavBar'

const Wrapper = (props) => {
    return (
        <nav {...props}>
            <LinkNavBar to = {"/"} {...props}>HOME</LinkNavBar>
            <LinkNavBar to = {"/Causes"} {...props}>CAUSES</LinkNavBar>
            <LinkNavBar to = {"/Posts"} {...props}>POSTS</LinkNavBar>
            <LinkNavBar to = {"/Profile"} {...props}>PROFILE</LinkNavBar>
        </nav>
    )
}

const LinkWrapper = styled(Wrapper)`
    /* border: 1px solid purple; */
    flex: 0;
    height: 100%;
    width: 80%;
    margin-right: 10px;
    
    display: flex;
`

export default LinkWrapper