import React from 'react'
import styled from 'styled-components'

const Button = () => {
    return (
        <button />
    )
}

const SignUpInButton = styled(Button)`
    height: 40px;
    width: 99px;
    border-color: black;
    border-width: 2px;
    border-style: solid;
    border-radius: 5px;
    font-size: 12px;

    :hover {
        background-color: green;
    };

`

export default SignUpInButton