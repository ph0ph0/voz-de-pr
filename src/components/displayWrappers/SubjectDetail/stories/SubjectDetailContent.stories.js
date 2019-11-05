import React from 'react'
import { storiesOf } from '@storybook/react'

import SubjectDetailContent from '../SubjectDetailContent'

const text = `We believe in conservation, not only because it protects native plants, birds and animals, but also because it protects us. After all, you simply can't be healthy in an unhealthy environment. By acting now to protect nature and prevent extinction, we can secure a better future for all.`;

const comments = [
    {
        name: "James Wheeler",
        commentContent: text,
        timePassed: "1 hour ago",
        noOfVotes: 456,
    }
]

storiesOf('DisplayWrappers|SubjectDetail/SubjectDetailContent/SubjectDetailContent', module)
    .add('Cause', () => <SubjectDetailContent subjectID = {1234567890}  noOfVotes = {423} comments = {comments}/>)
    .add('Post', () => <SubjectDetailContent secondary subjectID = {1234567890}  noOfVotes = {423} comments = {comments}/>)