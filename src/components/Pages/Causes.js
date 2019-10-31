import React from 'react'
import styled from 'styled-components'

import FeedPageContent from '../PageContentWrappers/FeedPages/FeedPageContent'

const Page = ({...props}) => {
    return (
        <div {...props}>
            <FeedPageContent pageTitle = {"Cause Lobby"} sidePanelType = {"CauseOnly"} profileType = {false}/>
        </div>
    )
}

const Causes = styled(Page)`
    /* position: static; */

    display: flex;
    flex-direction: row;

    justify-content: center;

    /* Needed to make the SidePanel keep its proper height */
    align-items: flex-start;
    
`

export default Causes