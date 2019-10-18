import React from 'react'
import styled from 'styled-components'
import { ReactComponent as UserPic } from '../../../../assets/NavBar/Userpic.svg'

const Wrapper = (props) => {
    return (
        <div {...props}>
            <UserPic />
        </div>
    )
}

const ProfPicSubjectCard = styled(Wrapper)`
    /* border: 1px solid green; */
    /* background-color: red; */
    max-width: 24px;
    width: auto;
    height: 24px;

    display: flex;
    justify-content: center;
    align-items: center;
`

export default ProfPicSubjectCard