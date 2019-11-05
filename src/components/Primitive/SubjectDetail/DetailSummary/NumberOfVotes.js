import React from 'react'
import styled from 'styled-components'

const NumberOfVotesWrapper = ({ noOfVotes, ...props}) => {
    return (
        <div {...props}>
            {noOfVotes} VOTES
        </div>
    )
}

const NumberOfVotes = styled(NumberOfVotesWrapper)`
    /* border: 1px solid purple; */
    font-size: 12px;
    color: ${props => props.secondary ? props.theme.secondaryColour : props.theme.primaryColour}
`

export default NumberOfVotes