import React from 'react'
import styled from 'styled-components'

import LinkDescription from '../../../Primitive/CreateSubject/LinkBody/LinkDescription'
import LinkTextArea from '../../../Primitive/CreateSubject/LinkBody/LinkTextArea'
import ActionButton from '../../../Primitive/General/ActionButton'

const LinkBodyWrapper = ({secondary, ...props}) => {
    return (
        <div {...props}>
            <LinkDescription />
            <LinkTextArea secondary={secondary} />
            <ActionButton secondary={secondary}>
                {secondary ? "Create Post" : "Create Cause"}
            </ActionButton>
        </div>
    )
}

const LinkBody = styled(LinkBodyWrapper)`
    /* border: 1px solid green; */

    /* 87% is roughly 650px wide */
    width: 87%;
    height: auto;

    margin-top: 33px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export default LinkBody