import React from 'react'
import styled from 'styled-components'

import SubjectCard from '../SubjectCard/SubjectCard'

const SubjectCardsWrapper = ({arrayOfSubjectCardData, ...props}) => {
    return (
        <div {...props}>
            {arrayOfSubjectCardData.map((subject, index) => (
                <SubjectCard 
                    key = {index}
                    author = {subject.author}
                    timeAgo = {subject.timeAgo} 
                    title = {subject.title}
                    subjectContent = {subject.subjectContent}
                    numberOfComments = {subject.numberOfComments} 
                    numberOfVotes = {subject.numberOfVotes} 
                    secondary = {(subject.type === "Post") ? true : false} 
                    src = {subject.src}
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