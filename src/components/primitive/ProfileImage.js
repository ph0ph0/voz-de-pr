//This is used to display the profile image in the top right of the NavBar

import React from 'react'
import styled from 'styled-components'

const Image = (props) => {
    return (
        <img {...props}/>
    )
}

const ProfileImage = styled(Image)`
    width: 40px;
    height: 40px;
`

export default ProfileImage