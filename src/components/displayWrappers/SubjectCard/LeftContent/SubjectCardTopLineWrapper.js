import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ProfPicSubjectCard from './ProfPicSubjectCard'
import NameTimeAgo from '../../../Primitive/SubjectCard/NameTimeAgo'
import DeleteButton from '../../../Primitive/SubjectCard/DeleteSubjectButton'

const Wrapper = ({author, isOwner, timeAgo, ...props}) => {
    return (
        <div {...props}>
            <ProfPicSubjectCard />
            <NameTimeAgo isTimeAgo = {false}>{author}</NameTimeAgo>
            <NameTimeAgo isTimeAgo = {true}>{timeAgo}</NameTimeAgo>
            {isOwner && <DeleteButton />}
        </div>
    )
}

const SubjectCardTopLineWrapper = styled(Wrapper)`
    /* border: 1px solid olive; */
    width: 100%;
    height: 24px;

    margin-top: 28px;

    display: flex;
    place-content: flex-start;
`
SubjectCardTopLineWrapper.propTypes = {
    author: PropTypes.string.isRequired,
    timeAgo: PropTypes.string.isRequired
}

export default SubjectCardTopLineWrapper