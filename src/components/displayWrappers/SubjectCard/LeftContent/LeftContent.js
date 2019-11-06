import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import SubjectCardTopLineWrapper from './SubjectCardTopLineWrapper'
import SubjectTitle from '../../../Primitive/SubjectCard/SubjectTitle'
import SubjectSummary from '../../../Primitive/SubjectCard/SubjectSummary'
import BottomWrapper from './BottomWrapper'

const Wrapper = ({author, isOwner, timePassed, title, subjectContent, numberOfComments, ...props}) => {
    return (
        <div {...props}>
            <SubjectCardTopLineWrapper author = {author} timePassed = {timePassed} isOwner = {isOwner}/>
            <SubjectTitle>{title}</SubjectTitle>
            <SubjectSummary>{subjectContent}</SubjectSummary>
            <BottomWrapper numberOfComments = {numberOfComments}/>
        </div>
    )
}

const LeftContent = styled(Wrapper)`
    /* border: 1px solid gold; */
    height: 100%;
    width: 100%;
    margin-left: 24px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

LeftContent.propTypes = {
    author: PropTypes.string.isRequired,
    timePassed: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subjectContent: PropTypes.string.isRequired,
    numberOfComments: PropTypes.number.isRequired,
}

export default LeftContent