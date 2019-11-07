import React from 'react'
import styled from 'styled-components'

import SubjectCard from '../SubjectCard/SubjectCard'

import { useHistory } from 'react-router-dom'

const SubjectCardsWrapper = ({staticContext, arrayOfSubjectCardData, ...props}) => {

    let history = useHistory()

    const onClick = (index) => {
        window.log(`clicked card with index: ${index}`)

        const subject = arrayOfSubjectCardData[index]
        const subjectID = subject.id

        history.push({
            pathname: `/${subjectID}`,
            state: {subject: subject}
        })
    }

    return (
        <div {...props}>
            {arrayOfSubjectCardData.map((subject, index) => (
                <SubjectCard 
                    key = {index}
                    author = {subject.author}
                    createdBy = {subject.createdBy}
                    timePassed = {subject.timePassed} 
                    title = {subject.title}
                    subjectContent = {subject.subjectContent}
                    numberOfComments = {subject.comments && subject.comments.length} 
                    numberOfVotes = {subject.votes} 
                    secondary = {(subject.type === "post") ? true : false} 
                    src = {subject.subjectImage}
                    onClick = {() => onClick(index)}
                />
            ))}
        </div>
    )
}

const SubjectCards = styled(SubjectCardsWrapper)`
    /* border: 1px solid turquoise; */
    display: flex;
    flex-direction: column;
`

export default SubjectCards