import React from 'react'
import styled from 'styled-components'

import CreatePageContent from '../PageContentWrappers/CreatePages/CreatePageContent'

const CreateCauseWrapper = ({...props}) => {
    return (
        <div {...props}>
            <CreatePageContent />
        </div>
    )
}

const CreateCause = styled(CreateCauseWrapper)`
    /* position: static; */

    display: flex;
    flex-direction: row;

    justify-content: center;

    /* Needed to make the SidePanel keep its proper height */
    align-items: flex-start;
`

export default CreateCause