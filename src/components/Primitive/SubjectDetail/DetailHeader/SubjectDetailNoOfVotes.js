import styled from 'styled-components'
import React from 'react'

const NoOfVotesWrapper = ({ noOfVotesOnSubject, ...props}) => {
    return (
        <p {...props}>
            {noOfVotesOnSubject} VOTES
        </p>
    )
}

const SubjectDetailNoOfVotes = styled(NoOfVotesWrapper)`
    font-size: 20px;
    color: ${props => props.secondary ? props.theme.secondaryColour : props.theme.primaryColour};

    margin: 0px;
    padding: 0px;
    line-height: 2em;

    vertical-align: center;

    margin-left: auto;
`

export default SubjectDetailNoOfVotes