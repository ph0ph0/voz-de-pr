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
        ...props
    }) => {

        const numberOfComments = comments.length

        return (
            <div {...props}>
                <DetailHeader secondary = {secondary} noOfVotes = {noOfVotes}/>
                <DetailImage />
                <DetailSummary secondary = {secondary} subjectID = {subjectID} noOfVotes = {noOfVotes} noOfComments = {numberOfComments}/>
                <DetailBody secondary = {secondary} noOfVotes = {noOfVotes}/>
                {(comments.length != 0) && <CommentsSection comments = {comments}/>}
            </div>
        )
}

const SubjectDetailContent = styled(SubjectDetailContentWrapper)``

export default SubjectDetailContent