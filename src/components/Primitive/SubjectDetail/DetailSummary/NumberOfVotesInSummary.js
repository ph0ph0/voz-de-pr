import React from 'react'
import styled from 'styled-components'

const NumberOfVotesWrapper = ({ noOfVotesOnComment, ...props}) => {
    return (
        <div {...props}>
            {noOfVotesOnComment} VOTES
        </div>
    )
}

const NumberOfVotesInSummary = styled(NumberOfVotesWrapper)`
    /* border: 1px solid purple; */
    font-size: 12px;
    color: ${props => props.secondary ? props.theme.secondaryColour : props.theme.primaryColour};
`

export default NumberOfVotesInSummary