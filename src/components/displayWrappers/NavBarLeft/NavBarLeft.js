import React from 'react'
import styled from 'styled-components'

import LinkWrapper from './LinkWrapper'
import LogoWrapper from './LogoWrapper'

const Wrapper = (props) => {
    return (
        <div {...props}>
            <LogoWrapper {...props}/>
            <LinkWrapper {...props}/>
        </div>
    )
}

const NavBarLeft = styled(Wrapper)`
    /* background-color: red; */
    height: 72px;
    flex-shrink: 1;
    flex-grow: 2;
    flex-basis: 33.3333%;
    /* width: 33.333%; */

    display: flex;
    justify-content: center;
    align-items: center;
    
`

export default NavBarLeft