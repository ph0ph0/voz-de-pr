import React from 'react'
import styled from 'styled-components'

const CreatePostWrapper = ({...props}) => {

    return (
        <div {...props}>
            <h1>Create Post</h1>
        </div>
    )
}

const CreatePost = styled(CreatePostWrapper)``

export default CreatePost