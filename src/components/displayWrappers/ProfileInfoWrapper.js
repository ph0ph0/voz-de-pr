import React from 'react'
import styled from 'styled-components'

import ProfileInfoNavBar from '../primitive/ProfileInfoNavBar'

const Wrapper = (props) => {
    return (
        <div {...props}>
            <ProfileInfoNavBar fontSize = {"16px"} width = {"100%"} height = {"50%"} paddingTop = {"15px"}>James Wheeler</ProfileInfoNavBar>
            <ProfileInfoNavBar fontSize = {"12px"} width = {"100%"} height = {"50%"} paddingBottom = {"15px"}>larkin_tr***@yahoo.com</ProfileInfoNavBar>
        </div>
    )
}

const ProfileInfoWrapper = styled(Wrapper)`
    width: 140px;
    height: 95%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default ProfileInfoWrapper