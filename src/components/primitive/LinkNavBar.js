import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { PropTypes } from 'prop-types'

const Link = (props) => {
    return (
        <NavLink 
            exact to = { props.to }
            {...props}
        />
    )
}

Link.propType = {
    to: PropTypes.string.isRequired
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
        color: ${props => props.theme.secondaryColour};
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: ${props => props.theme.secondaryColour};
        cursor: pointer;
    }

    &.active {
        color: ${props => props.theme.secondaryColour};
        border-bottom: 1px solid ${props => props.theme.secondaryColour};
    }
`

export default LinkNavBar