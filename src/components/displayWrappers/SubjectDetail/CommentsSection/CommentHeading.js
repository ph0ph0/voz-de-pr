import React from 'react'
import styled from 'styled-components'

import NameTimeAgo from '../../../Primitive/SubjectCard/NameTimeAgo'
import CommentNumberOfVotes from '../../../Primitive/SubjectDetail/CommentsSection/CommentNumberOfVotes'
import VoteArrow from '../../../Primitive/SubjectDetail/DetailSummary/VoteArrow'

const CommentHeadingWrapper = ({ noOfVotes, name, timePassed, ...props}) => {
    return (
        <div {...props}>
            <NameTimeAgo>{name}</NameTimeAgo>
            <NameTimeAgo timeAgo>{timePassed}</NameTimeAgo>
            <CommentNumberOfVotes noOfVotes = {noOfVotes} />
            <VoteArrow small />
            <VoteArrow small pointDown/>
        </div>
    )
}

const CommentHeading = styled(CommentHeadingWrapper)`
    display: flex;
    align-items: center;
`

export default CommentHeading