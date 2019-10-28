import React from 'react'
import styled from 'styled-components'

import PageContent from '../DisplayWrappers/PageContent/PageContent'

const Page = ({...props}) => {
    return (
        <div {...props}>
            <PageContent pageTitle = {"Cause Lobby"} sidePanelType = {"CauseOnly"}/>
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