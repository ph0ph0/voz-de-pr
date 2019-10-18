//Wraps around the name and email of the current user so that it can be placed into the NavBarRight wrapper.

import React from 'react'
import styled from 'styled-components'

import ProfileInfoNavBar from '../../../../Primitive/NavBar/ProfileInfoNavBar'

const Wrapper = (props) => {
    return (
        <div className = {props.className}>
            <ProfileInfoNavBar fontSize = {"16px"} width = {"80%"} height = {"50%"} paddingTop = {"15px"}>James Wheeler</ProfileInfoNavBar>
            <ProfileInfoNavBar fontSize = {"12px"} width = {"80%"} height = {"50%"} paddingBottom = {"15px"}>larkin_tr***@yahoo.com</ProfileInfoNavBar>
        </div>
    )
}

const ProfileInfoWrapper = styled(Wrapper)`
    /* background-color: yellow; */
    width: 140px;
    height: 95%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default ProfileInfoWrapper