import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
    return (
        <button {...props} />
    )
}

const SignUpInButton = styled(Button)`
    height: 40px;
    width: 99px;
    background-color: white;
    border-color: ${props => (props.secondary ? `#1B4EA0` : `#EC220D`)};
    border-width: 2px;
    border-style: solid;
    border-radius: 5px;
    color: ${props => (props.secondary ? `#1B4EA0` : `#EC220D`)};
    margin-right: ${props => (props.secondary ? `15px` : 0)};
    font-size: 12px;

  :hover {
    background-color: ${props => (props.secondary ? `#1B4EA0` : `#EC220D`)};
    color: white;
  }

`

export default SignUpInButton