import React from 'react'
import styled from 'styled-components'

import SignUpInButtonWrapper from './SignUpInButtonWrapper'
import ProfileWrapper from './ProfileWrapper'

const Wrapper = (props) => {
    return (
        <div {...props}>
            <SignUpInButtonWrapper />
            <ProfileWrapper />
        </div>
    )
}

const NavBarRight = styled(Wrapper)`
    /* background-color: orange; */
    flex-shrink: 1;
    flex-grow: 2;
    flex-basis: 33.3333%;
    height: 72px;

    display: flex;
    justify-content: center;
    align-items: center;
`

export default NavBarRight