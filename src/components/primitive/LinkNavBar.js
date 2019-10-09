import React from 'react'
import styled from 'styled-components'

const Link = (props) => {
    return (
        <a 
        selected = {props.selected}
        {...props}
        />
    )
}

const LinkNavBar = styled(Link)`
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 20px;
    font-size: 16px;
    color: #131415;
    border-bottom: ${props => (props.selected ? "1px solid #1B4EA0" : 0)};

    :hover {
        color: #1B4EA0;
        border-bottom: 1px solid #1B4EA0;
    }
`

export default LinkNavBar