import React from 'react'
import styled from 'styled-components'

import SubjectDetailContent from './SubjectDetailContent'
import { CauseOnly } from '../../../Constants/MockSubjectsData'

const SubjectDetailWrapper = ({subject, secondary, ...props}) => {

    return (
        <div {...props}>
            <SubjectDetailContent subjectID = {subject.id} noOfVotes = {subject.votes} subjectContent = {subject.subjectContent} comments = {subject.comments} src = {subject.subjectImage} secondary = {secondary} />
        </div>
    )
}

const SubjectDetailCard = styled(SubjectDetailWrapper)`
     /* border: 1px solid black; */
    display: flex;
    flex-direction: column;

    width: 738px;
    height: auto;

    margin: 0px;
    margin-right: 30px;
    padding: 0px;
    padding-bottom: 20px;

    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);
`

export default SubjectDetailCard