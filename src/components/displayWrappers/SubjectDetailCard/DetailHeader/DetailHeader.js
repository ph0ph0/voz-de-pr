import React from 'react'
import styled from 'styled-components'

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

export default DetailHeader