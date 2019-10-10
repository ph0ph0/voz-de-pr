import React from 'react'
import styled from 'styled-components'

import ProfileImage from '../../../../primitive/ProfileImage'

const Wrapper = (props) => {
    return (
        <div {...props}>
            <ProfileImage />
        </div>
    )
}

const ProfileImageWrapper = styled(Wrapper)`
    width: 40px;
    height: 95%;

    display: flex;
    justify-content: center;
    align-items: center;
`

export default ProfileImageWrapper