import React from 'react'
import styled from 'styled-components'

const Page = (props) => {
    return (
        <div {...props}>
            Home YOU CUNT
        </div>
    )
}

const MainFeed = styled(Page)`
    padding-top: "300px";
    border: 1px solid black;
`

export default MainFeed