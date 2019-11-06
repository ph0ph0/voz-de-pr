import React from 'react'
import styled from 'styled-components'

import LeftContent from './LeftContent/LeftContent'
import RightContent from './RightContent/RightContent'

const Wrapper = ({author, createdBy, timePassed, title, subjectContent, numberOfComments, numberOfVotes, secondary, src, ...props}) => {

    const userID = "USERID2"

    const isOwner = (userID === createdBy) ? true : false

    const leftProps = {author, timePassed, title, subjectContent, numberOfComments, isOwner}
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

    & + & {
        margin-top: 15px;
    }
`

export default SubjectCard

