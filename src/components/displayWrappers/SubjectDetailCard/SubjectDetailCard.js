import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import SubjectDetailContent from './SubjectDetailContent'

const SubjectDetailWrapper = ({subject, secondary, ...props}) => {

    return (
        <div {...props}>
            <SubjectDetailContent subject = {subject} secondary = {secondary} />
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

SubjectDetailCard.propTypes = {
    secondary: PropTypes.bool.isRequired,
    subject: PropTypes.shape({
        id: PropTypes.string.isRequired,
        createdBy: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subjectContent: PropTypes.string.isRequired,
        subjectImage: PropTypes.string.isRequired,
        votes: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(
            PropTypes.object.isRequired
        ),
        timePassed: PropTypes.string.isRequired
    })
}

export default SubjectDetailCard