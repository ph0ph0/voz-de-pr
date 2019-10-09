import React from 'react'
import styled from 'styled-components'

import ProfileInfoNavBar from '../primitive/ProfileInfoNavBar.js'
import ProfileImage from '../primitive/ProfileImage.js'

const NavBarRight = (props) => {
    return (
        <div {...props}>
            {props.children}
        </div>
    )
}