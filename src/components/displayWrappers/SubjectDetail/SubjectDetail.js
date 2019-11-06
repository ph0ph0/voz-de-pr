import React from 'react'
import styled from 'styled-components'

import SubjectDetailContent from './SubjectDetailContent'

const SubjectDetailWrapper = ({subjectID, noOfVotes, comments, secondary, ...props}) => {
    return (
        <div {...props}>
            <SubjectDetailContent subjectID = {subjectID} noOfVotes = {noOfVotes} comments = {comments} secondary = {secondary} />
        </div>
    )
}

const SubjectDetail = styled(SubjectDetailWrapper)`
     /* border: 1px solid black; */
    display: flex;
    flex-direction: column;

    width: 738px;
    height: auto;

    margin: 0px;
    padding: 0px;
    padding-bottom: 20px;

    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);
`

export default SubjectDetail