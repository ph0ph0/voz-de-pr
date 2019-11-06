import React from 'react'
import styled from 'styled-components'

import SubjectDetailTitle from '../../../../Primitive/SubjectDetail/DetailHeader/SubjectDetailTitle'
import VotesOnSubject from '../../../../Primitive/SubjectDetail/General/VotesOnSubject'

const DetailHeaderBottomLineWrapper = ({ secondary, votesOnSubject, ...props}) => {
    return (
        <div {...props}>
            <SubjectDetailTitle>Puerto Rico - Cherish Its Natural Wonders</SubjectDetailTitle>
            <VotesOnSubject secondary = {secondary} votesOnSubject = {votesOnSubject}/>
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