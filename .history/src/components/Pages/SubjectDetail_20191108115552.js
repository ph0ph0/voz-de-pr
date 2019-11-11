import React from 'react'
import styled from 'styled-components'

import SubjectDetailPageContent from '../PageContentWrappers/DetailPages/DetailPageContent'

import { SubjectsMixed } from '../../Constants/MockSubjectsData'

import { withRouter } from 'react-router-dom'

export const fetchSubject = (subjectID) => {
    window.log(`fetching subject: ${subjectID}`)

    //This is meant to be equivalent to going to the server to get the subject. Replace with a server call
    let subject = SubjectsMixed.filter(subject =>  subjectID === subject.id)
    window.log(`subject retrieved: ${JSON.stringify(subject[0].id)}`)
    
    return subject[0]

}

const SubjectDetailPageWrapper = withRouter(({ staticContext, ...props,}) => {

    window.log(`props for SDPW: ${JSON.stringify(props)}`)

    var passedSubject = (props.location && props.location.state && props.location.state.subject) 
        ? props.location.state.subject 
        : fetchSubject(props.match.params.subjectID)  

    const subject = passedSubject
    window.log(`subject to show is: ${JSON.stringify(subject.id)}`)

    //secondary here determines which side panel should be shown; the post one or the cause one.
    const secondary = (subject.type === "post") ? true : false

    return (
        <div {...props}>
            <SubjectDetailPageContent subject = {subject} secondary = {secondary}/>
        </div>
    )
})

const SubjectDetailPage = styled(SubjectDetailPageWrapper)`
    /* border: 1px solid orange; */

    display: flex;
    justify-content: center;
    align-items: flex-end;
`

export default SubjectDetailPage