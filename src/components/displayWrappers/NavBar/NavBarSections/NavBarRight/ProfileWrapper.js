import React from 'react'
import styled from 'styled-components'

import ProfileInfoWrapper from './ProfileInfoWrapper'
import ProfileImageWrapper from './ProfileImageWrapper'

const Wrapper = (props) => {

    function onClick() {
        console.log(`Clicked Profile Wrapper`)
    }

    return (
        <div {...props} onClick = {onClick}>
            <ProfileImageWrapper />
            <ProfileInfoWrapper />
        </div>
    )
}

const ProfileWrapper = styled(Wrapper)`
    /* background-color: blue; */
    width: 60%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        cursor: pointer;
    }
`

export default ProfileWrapper