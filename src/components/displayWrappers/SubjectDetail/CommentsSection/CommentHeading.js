import React from 'react'
import styled from 'styled-components'

import NameTimeAgo from '../../../Primitive/SubjectCard/NameTimeAgo'
import VotesOnComment from '../../../Primitive/SubjectDetail/CommentsSection/VotesOnComment'
import VoteArrow from '../../../Primitive/SubjectDetail/DetailSummary/VoteArrow'

const CommentHeadingWrapper = ({ votesOnComment, name, timePassed, ...props}) => {
    return (
        <div {...props}>
            <NameTimeAgo>{name}</NameTimeAgo>
            <NameTimeAgo timeAgo>{timePassed}</NameTimeAgo>
            <VotesOnComment votesOnComment = {votesOnComment} />
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