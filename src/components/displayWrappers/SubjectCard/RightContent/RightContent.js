import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import SubjectInfo from './SubjectinfoWrapper'
import SubjectImage from '../../../Primitive/SubjectCard/SubjectImage'

const Wrapper = ({numberOfVotes, secondary, src, ...props}) => {
    return (
        <div {...props}>
        <SubjectInfo numberOfVotes = {numberOfVotes} secondary = {secondary}></SubjectInfo>
        <SubjectImage src = {src}/>
    </div>
    )
}

const RightContent = styled(Wrapper)`
    /* border: 1px solid rosybrown; */
    width: 50%;
    height: 100%;
    /* margin-top: 12px; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

RightContent.propTypes = {
    numberOfVotes: PropTypes.number.isRequired,
    secondary: PropTypes.bool.isRequired
}

export default RightContent