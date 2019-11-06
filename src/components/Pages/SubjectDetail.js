import React from 'react'
import styled from 'styled-components'

import SubjectDetailPageContent from '../PageContentWrappers/DetailPages/DetailPageContent'

const SubjectDetailPageWrapper = ({ type, ...props}) => {
    return (
        <div {...props}>
            <SubjectDetailPageContent type = {type}/>
        </div>
    )
}

const SubjectDetailPage = styled(SubjectDetailPageWrapper)`
    border: 1px solid orange;

    display: flex;
    justify-content: center;
`

export default SubjectDetailPage