import React from 'react'
import styled from 'styled-components'

import ProfileInfoWrapper from './ProfileInfoWrapper'
import ProfileImageWrapper from './ProfileImageWrapper'

const Wrapper = (props) => {
    return (
        <div {...props}>
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
`

export default ProfileWrapper