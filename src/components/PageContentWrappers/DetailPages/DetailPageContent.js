//Detail Page doesnt have a MainPageContent as there is only the SubjectDetailCard and the side panel.

import React from 'react'
import styled from 'styled-components'

import SubjectDetailCard from '../../DisplayWrappers/SubjectDetailCard/SubjectDetailCard'
import SidePanel from '../../DisplayWrappers/SidePanel/SidePanel'

const SubjectDetailPageContentWrapper = ({ type, ...props}) => {
    return (
        <div {...props}>
            <SubjectDetailCard />
            <SidePanel type = {type}/>
        </div>
    )
}

const SubjectDetailPageContent = styled(SubjectDetailPageContentWrapper)`
    display: flex;
`

export default SubjectDetailPageContent