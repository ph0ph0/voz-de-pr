import React from 'react'
import styled from 'styled-components'

import SubjectDetailPageContent from '../PageContentWrappers/DetailPages/DetailPageContent'

import { CauseOnly } from '../../Constants/MockSubjectsData'

const SubjectDetailPageWrapper = ({ ...props}) => {

    //secondary here determines which side panel should be shown; the post one or the cause one.

    const subject = CauseOnly[0]

    const secondary = (subject.type === "post") ? true : false

    return (
        <div {...props}>
            <SubjectDetailPageContent subject = {subject} secondary = {secondary}/>
        </div>
    )
}

const SubjectDetailPage = styled(SubjectDetailPageWrapper)`
    /* border: 1px solid orange; */

    display: flex;
    justify-content: center;
    align-items: flex-end;
`

export default SubjectDetailPage