import React from 'react'
import styled from 'styled-components'

const Text = (props) => {
    return (
        <div {...props} />
    )
}

const ProfileInfoNavBar = styled(Text)`
    font-size: ${(props) => props.fontSize ? props.fontSize : "16px"};
    width: ${(props) => props.width ? props.width : "100%"};
    height: ${(props) => props.height ? props.height : "50%"};
    padding-top: ${(props) => props.paddingTop ? props.paddingTop: "0px"};
    padding-bottom: ${(props) => props.paddingBottom ? props.paddingBottom : "0px"};
`

export default ProfileInfoNavBar