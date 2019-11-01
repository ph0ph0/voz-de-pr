import React from 'react'
import styled from 'styled-components'

import FeedPageContent from '../PageContentWrappers/FeedPages/FeedPageContent'

const Page = (props) => {
    return (
        <div {...props}>
            <FeedPageContent pageTitle = {"My Profile"} sidePanelType = {"Profile"} profileType = {true}/>
        </div>
    )
}

const Profile = styled(Page)`
    margin-top: "200px";
`

export default Profile