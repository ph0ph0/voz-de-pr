import React from 'react'
import styled from 'styled-components'
import PropTypes, { bool } from 'prop-types'

import DetailHeaderTopLineWrapper from './TopLine/DetailHeaderTopLine'
import DetailHeaderBottomLineWrapper from './BottomLine/DetailHeaderBottomLine'

const DetailHeaderWrapper = ({ secondary, votesOnSubject, ...props }) => {
    return (
        <div {...props}>
            <DetailHeaderTopLineWrapper />
            <DetailHeaderBottomLineWrapper secondary = {secondary} votesOnSubject = {votesOnSubject}/>
        </div>
    )
}

const DetailHeader = styled(DetailHeaderWrapper)`
    display: flex;
    flex-direction: column;

    width: 100%;

    margin: 0px;
    margin-bottom: 25px;
    padding: 0px;
`
DetailHeader.propTypes = {
    secondary: PropTypes.bool.isRequired,
    votesOnSubject: PropTypes.number.isRequired
}


export default DetailHeader