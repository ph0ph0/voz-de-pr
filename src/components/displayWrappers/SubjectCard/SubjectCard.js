import React from 'react'
import styled from 'styled-components'

import LeftContent from './LeftContent/LeftContent'
import RightContent from './RightContent/RightContent'

const Wrapper = ({profileName, timeAgo, title, subjectSummary, numberOfComments, numberOfVotes, secondary, src, ...props}) => {

    const leftProps = {profileName, timeAgo, title, subjectSummary, numberOfComments}
    const rightProps = {numberOfVotes, secondary, src}

    return (
        <div {...props}>
            <LeftContent {...leftProps}/>
            <RightContent {...rightProps}/>
        </div>
    )
}

const SubjectCard = styled(Wrapper)`
    /* border: 1px solid black; */
    width: 738px;
    height: 178px;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);

    display: flex;
`

export default SubjectCard