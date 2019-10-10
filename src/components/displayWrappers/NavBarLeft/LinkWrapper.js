import React from 'react'
import styled from 'styled-components'

import LinkNavBar from '../../primitive/LinkNavBar'

const Wrapper = (props) => {
    return (
        <div {...props}>
            <LinkNavBar {...props}>HOME</LinkNavBar>
            <LinkNavBar {...props}>CAUSES</LinkNavBar>
            <LinkNavBar {...props}>POSTS</LinkNavBar>
            <LinkNavBar {...props}>PROFILE</LinkNavBar>
        </div>
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