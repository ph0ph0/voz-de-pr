import React from 'react'
import styled from 'styled-components'

import ActionButton from '../General/ActionButton'
import { Link } from 'react-router-dom'

const SidePanelActionButtonWrapper = ({secondary, ...props}) => {
    return (
        <Link {...props} to = {secondary ? "/create-post" : "create-cause"}>
            <ActionButton  {...props} secondary = {secondary}>{secondary ? "Create Post" : "Create Cause"}</ActionButton>
        </Link>
        
    )
}

const SidePanelActionButton = styled(SidePanelActionButtonWrapper)`
    & + & {
        margin-top: 20px
    }
`

export default SidePanelActionButton