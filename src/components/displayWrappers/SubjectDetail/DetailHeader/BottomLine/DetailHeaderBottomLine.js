import React from 'react'
import styled from 'styled-components'

import SubjectDetailTitle from '../../../../Primitive/SubjectDetail/DetailHeader/SubjectDetailTitle'
import SubjectDetailNoOfVotes from '../../../../Primitive/SubjectDetail/DetailHeader/SubjectDetailNoOfVotes'

const DetailHeaderBottomLineWrapper = ({ secondary, ...props}) => {
    return (
        <div {...props}>
            <SubjectDetailTitle>Puerto Rico - Cherish Its Natural Wonders</SubjectDetailTitle>
            <SubjectDetailNoOfVotes secondary = {secondary}>147 VOTES</SubjectDetailNoOfVotes>
        </div>
    )
}

const DetailHeaderBottomLine = styled(DetailHeaderBottomLineWrapper)`
    /* border: 1px solid teal; */

    height: 27px;
    width: auto;

    margin-top: 27px;

    display: flex;
    flex-direction: row;
`

export default DetailHeaderBottomLine