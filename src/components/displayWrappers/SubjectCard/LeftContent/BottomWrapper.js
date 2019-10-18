import React from 'react'
import styled from 'styled-components'

import BubbleWrapper from './BubbleWrapper'
import CommentsIndicator from '../../../Primitive/SubjectCard/CommentsIndicator'

const Wrapper = ({children, ...props}) => {
    return (
        <div {...props}>
            <BubbleWrapper />
            <CommentsIndicator>{children}</CommentsIndicator>
        </div>
    )
}

const BottomWrapper = styled(Wrapper)`
    /* border: 1px solid blue; */
    width: 100%;
    height: 16px;

    margin-top: 9px;

    display: flex;
    place-content: flex-start;
`

export default BottomWrapper