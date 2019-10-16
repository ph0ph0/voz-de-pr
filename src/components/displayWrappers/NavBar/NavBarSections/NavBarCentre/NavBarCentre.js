import React from 'react'
import styled from 'styled-components'

import SearchBar from '../../../../Primitive/SearchBar'

const Wrapper = ({placeholder, ...props}) => {
    return (
        <div {...props}>
            <SearchBar placeholder = {placeholder} type = "text"/>
        </div>
    )
}

const NavBarCentre = styled(Wrapper)`
    /* background-color: red; */
    height: 72px;
    flex-grow: 10;
    flex-shrink: 5;
    flex-basis: 33.33333%;
    /* flex-shrink: 2; */
    /* width: 33.3333%; */
    

    display: flex;
    justify-content: center;
    align-items: center;
`

export default NavBarCentre