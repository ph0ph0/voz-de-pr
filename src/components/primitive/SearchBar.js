import React from 'react'
import styled from 'styled-components'

const Search = (props) => {
    return (
        <input 
        placeholer = {props.placeholder}
        type = "text"
        {...props}
    />
    )
}

const SearchBar = styled(Search)`
    border: 1px solid #f6f7f8;
    border-radius: 2px;
    height: 40px;
    width: 90%;
    background-color: #f6f7f8;
    padding-left: 20px;
    margin-right: 10px;
`

export default SearchBar