import React from 'react'
import styled from 'styled-components'

import Filters from './Filters'
import PageTitle from '../../Primitive/TopOfPage/PageTitle'

const TopOfPageWrapper = ({children, profileType, ...props}) => {
    return (
        <div {...props}>
            <PageTitle>{children}</PageTitle>
            <Filters profileType = {profileType}/>
        </div>
    )
}

const TopOfPage = styled(TopOfPageWrapper)`
    border: 1px solid orange;
    height: 34px;
    
    margin-top: 35px;
    margin-bottom: 28px;

    display: flex;
    flex-direction: row;
    align-items: center;
`

export default TopOfPage