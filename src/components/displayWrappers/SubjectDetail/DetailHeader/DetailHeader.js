import React from 'react'
import styled from 'styled-components'

import DetailHeaderTopLineWrapper from './TopLine/DetailHeaderTopLine'
import DetailHeaderBottomLineWrapper from './BottomLine/DetailHeaderBottomLine'

const DetailHeaderWrapper = ({ secondary, ...props }) => {
    return (
        <div {...props}>
            <DetailHeaderTopLineWrapper />
            <DetailHeaderBottomLineWrapper secondary = {secondary}/>
        </div>
    )
}

const DetailHeader = styled(DetailHeaderWrapper)`
    display: flex;
    flex-direction: column;

    width: 100%;

    margin: 0px;
    padding: 0px;
`

export default DetailHeader