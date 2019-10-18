import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import SubjectCardTopLineWrapper from './SubjectCardTopLineWrapper'
import SubjectTitle from '../../../Primitive/SubjectCard/SubjectTitle'
import SubjectSummary from '../../../Primitive/SubjectCard/SubjectSummary'
import BottomWrapper from './BottomWrapper'

const Wrapper = ({profileName, timeAgo, title, subjectSummary, numberOfComments, ...props}) => {
    return (
        <div {...props}>
            <SubjectCardTopLineWrapper profileName = {profileName} timeAgo = {timeAgo} />
            <SubjectTitle>{title}</SubjectTitle>
            <SubjectSummary>{subjectSummary}</SubjectSummary>
            <BottomWrapper>{numberOfComments}</BottomWrapper>
        </div>
    )
}

Wrapper.propType = {
    ProfileName: PropTypes.string.isRequired,
    TimeAgo: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Summary: PropTypes.string.isRequired,
    NumberOfComments: PropTypes.string.isRequired,
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

export default LeftContent