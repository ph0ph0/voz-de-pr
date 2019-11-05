import styled from 'styled-components'
import React from 'react'

const CommentsIndicatorWrapper = ({ noOfComments, ...props}) => {
    return (
        <div {...props}>
            {noOfComments} Comments
        </div>

    )
}

const CommentsIndicator = styled(CommentsIndicatorWrapper)`
    /* border: 1px solid lime; */
    height: 16px;
    width: auto;

    color: rgba(0, 0, 0, 0.54);
    font-family: Avenir;
    text-align: left;
    font-size: 12px;
`

export default CommentsIndicator