import React from 'react'
import styled from 'styled-components'

import SubjectVotes from '../../../Primitive/SubjectCard/SubjectVotes'
import SubjectType from '../../../Primitive/SubjectCard/SubjectType'

const Wrapper = ({numberOfVotes, secondary, ...props}) => {
    return (
        <div {...props}>
            <SubjectVotes secondary = {secondary}>{numberOfVotes} {(numberOfVotes > 1) ? "VOTES" : (numberOfVotes === 1) ? "VOTE" : "VOTES"}</SubjectVotes>
            <SubjectType secondary = {secondary} />
        </div>
    )
}

const SubjectInfoWrapper = styled(Wrapper)`
    /* 74% aligns the text over the image */
    width: 74%;
    height: 22px;

    display: flex;
    flex-direction: row;
`

export default SubjectInfoWrapper