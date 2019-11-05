import React from 'react'
import styled from 'styled-components'

const CommentContentWrapper = ({ commentContent, ...props}) => {
    return (
        <p {...props}>
            {commentContent}
        </p>
    )
}

const CommentContent = styled(CommentContentWrapper)`
    /* border: 1px solid darkkhaki */
    font-size: 12px;
    font-family: Avenir;
    text-align: justify;
    color: rgba(0, 0, 0, 0.54);

    margin-left: 26px;
`

export default CommentContent