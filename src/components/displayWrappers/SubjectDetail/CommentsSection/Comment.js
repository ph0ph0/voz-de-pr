import React from 'react'
import styled from 'styled-components'

import CommentHeading from './CommentHeading'
import CommentContent from '../../../Primitive/SubjectDetail/CommentsSection/CommentContent'

const CommentWrapper = ({ votesOnComment, commentContent, name, timePassed, ...props}) => {
    return (
        <div {...props}>
            <CommentHeading votesOnComment = {votesOnComment} name = {name} timePassed = {timePassed}/>
            <CommentContent commentContent = {commentContent}/>
        </div>
    )
}

const Comment = styled(CommentWrapper)``

export default Comment