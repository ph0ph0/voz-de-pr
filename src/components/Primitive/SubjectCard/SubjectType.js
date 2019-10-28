import React from 'react'
import styled from 'styled-components'

const type = ({secondary, ...props}) => {

    const type = secondary ? "Post" : "Cause"

    return (
        <div {...props}>
            {type}
        </div>
    )
}

const SubjectType = styled(type)`
    /* border: 1px solid magenta; */
    width: 50%;
    height: 22px;

    color: ${props => props.secondary ? props.theme.secondaryColour : props.theme.primaryColour}; 

    font-size: 16px;
    text-align: right;
`

export default SubjectType