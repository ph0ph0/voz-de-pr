import React from 'react'
import styled from 'styled-components'

import DetailHeader from './DetailHeader/DetailHeader'
import DetailImage from '../../Primitive/SubjectDetail/DetailImage/DetailImage'
import DetailSummary from './DetailSummary/DetailSummary'
import DetailBody from './DetailBody/DetailBody'
import CommentsSection from './CommentsSection/CommentsSection'

const SubjectDetailContentWrapper = (
    { 
        secondary, 
        subjectID,  
        noOfVotes, 
        comments,
        src,
        ...props
    }) => {

        const numberOfComments = comments && comments.length

        return (
            <div {...props}>
                <DetailHeader secondary = {secondary} noOfVotes = {noOfVotes}/>
                <DetailImage src = {src} />
                <DetailSummary secondary = {secondary} subjectID = {subjectID} noOfVotes = {noOfVotes} noOfComments = {numberOfComments}/>
                <DetailBody secondary = {secondary} noOfVotes = {noOfVotes}/>
                {comments && (comments.length != 0) && <CommentsSection comments = {comments}/>}
            </div>
        )
}

const SubjectDetailContent = styled(SubjectDetailContentWrapper)`
    /* border: 1px solid purple; */
    display: flex;
    flex-direction: column;

    align-items: center;
    margin: 0 34px 0 34px;
`

export default SubjectDetailContent