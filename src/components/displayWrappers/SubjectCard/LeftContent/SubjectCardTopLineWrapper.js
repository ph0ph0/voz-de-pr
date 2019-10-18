import React from 'react'
import styled from 'styled-components'

import ProfPicSubjectCard from './ProfPicSubjectCard'
import NameTimeAgo from '../../../Primitive/SubjectCard/NameTimeAgo'
import DeleteButton from '../../../Primitive/SubjectCard/DeleteSubjectButton'

const Wrapper = (props) => {
    return (
        <div {...props}>
            <ProfPicSubjectCard />
            <NameTimeAgo isTimeAgo = {false}>James Montgommery Wheeler McGuiness</NameTimeAgo>
            <NameTimeAgo isTimeAgo = {true}>1 Hour Ago</NameTimeAgo>
            <DeleteButton />
        </div>
    )
}

const SubjectCardTopLineWrapper = styled(Wrapper)`
    /* border: 1px solid olive; */
    width: 100%;
    height: 24px;

    margin-top: 28px;

    display: flex;
    place-content: flex-start;
`

export default SubjectCardTopLineWrapper