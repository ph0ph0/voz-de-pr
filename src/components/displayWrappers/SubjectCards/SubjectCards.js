import React from 'react'
import styled from 'styled-components'

import SubjectCard from '../SubjectCard/SubjectCard'

const SubjectCardsWrapper = ({arrayOfSubjectCardData, ...props}) => {
    return (
        <div {...props}>
            {arrayOfSubjectCardData}
        </div>
    )
}

const SubjectCards = styled(SubjectCardsWrapper)`
    display: flex;
    flex-direction: column;
    margin-right: 30px;
`

export default SubjectCards