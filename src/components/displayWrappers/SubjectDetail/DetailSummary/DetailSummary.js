import React from 'react'
import styled from 'styled-components'

import BubbleWrapper from '../../SubjectCard/LeftContent/BubbleWrapper'
import CommentsIndicator from '../../../Primitive/SubjectDetail/DetailSummary/CommentsIndicator'
import SubjectID from '../../../Primitive/SubjectDetail/DetailSummary/SubjectID'
import NoOfVotes from '../../../Primitive/SubjectDetail/DetailSummary/NumberOfVotes'
import VoteArrow from '../../../Primitive/SubjectDetail/DetailSummary/VoteArrow'

const DetailSummaryWrapper = ({ secondary, noOfComments, subjectID, noOfVotes, ...props}) => {
    return (
        <div {...props}>
            <BubbleWrapper />
            <CommentsIndicator noOfComments = {noOfComments}/>
            <SubjectID secondary = {secondary} subjectID = {subjectID}/>
            <NoOfVotes noOfVotes = {noOfVotes}/>
            <VoteArrow />
            <VoteArrow pointDown />
        </div>
    )
}

const DetailSummary = styled(DetailSummaryWrapper)`
    /* border: 1px solid blue; */
    width: 100%;
    height: 20px;

    margin-top: 24px;
    margin-bottom: 12px;
    padding: 0 21px 0 21px;

    box-sizing: border-box;

    display: flex;
    place-content: flex-start;
    align-items: center;
`

export default DetailSummary