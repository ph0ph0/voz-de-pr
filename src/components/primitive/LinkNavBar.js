import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Link = (props) => {
    return (
        <NavLink 
            exact to = { props.to }
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
    font-family: Avenir;
    color: #131415;
    text-decoration: none;
    border-bottom: ${props => (props.selected ? "1px solid #1B4EA0" : 0)};

    :hover {
        color: #1B4EA0;
        border-bottom: 1px solid #1B4EA0;
        cursor: pointer;
    }

    &.active {
        color: #1B4EA0;
        border-bottom: 1px solid #1B4EA0;
    }
`

export default LinkNavBar