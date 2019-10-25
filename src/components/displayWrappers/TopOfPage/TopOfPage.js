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
  border: 1px solid red;
  display: flex;
  flex-direction: row;
`

export default TopOfPage