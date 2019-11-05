import React from 'react'
import styled from 'styled-components'

const CommentNumberOfVotesWrapper = ({ noOfVotes, ...props}) => {
    return (
        <p {...props}>
            {noOfVotes} VOTES
        </p>
    )
}

const CommentNumberOfVotes = styled(CommentNumberOfVotesWrapper)`
    font-weight: bold;
    font-size: 12px;
    line-height: 2.2em;
    color: rgba(117, 117, 117, 1);

    margin: 0px;
    padding: 0px;
    margin-left: 10px;
`

export default CommentNumberOfVotes