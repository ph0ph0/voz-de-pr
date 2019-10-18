import React from 'react'
import styled from 'styled-components'

import { ReactComponent as Bubble} from '../../../../assets/SubjectCard/Bubble.svg'


const Wrapper = (props) => {
    return (
        <div {...props}>
            <Bubble />
        </div>
    )
}

const BubbleWrapper = styled(Wrapper)`
    /* border: 1px solid green;
    background-color: red; */
    width: 33px;
    height: 16px;

    padding: 0px;
    margin-left: -10px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export default BubbleWrapper