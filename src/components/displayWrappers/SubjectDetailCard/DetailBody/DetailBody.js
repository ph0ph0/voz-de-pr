import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import SubjectContent from '../../../Primitive/SubjectDetail/DetailBody/SubjectContent'
import SubjectLink from '../../../Primitive/SubjectDetail/DetailBody/SubjectLink'
import CommentInfo from '../../../Primitive/SubjectDetail/DetailBody/CommentInfo'
import CommentBox from './CommentBox'

const DetailBodyWrapper = ({ subjectContent, secondary, ...props}) => {
    return (
        <div {...props}>
            <SubjectContent>{subjectContent}</SubjectContent>
            <SubjectLink secondary = {secondary}>http://www.fideicomiso.org/home.html</SubjectLink>
            <CommentInfo secondary = {secondary}/>
            <CommentBox secondary = {secondary}/>
        </div>
    )
}

const DetailBody = styled(DetailBodyWrapper)`
    /* border: 1px solid orange; */

    width: 100%;

    padding: 0px;
    margin: 0px;
    /* margin: 0 21px 20px 21px; */
`

DetailBody.propTypes = {
    secondary: PropTypes.bool.isRequired,
    subjectContent: PropTypes.string.isRequired
  }

export default DetailBody