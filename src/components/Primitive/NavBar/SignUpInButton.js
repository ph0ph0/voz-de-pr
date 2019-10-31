//The signup or log in button displayed in the top right of the nav bar.

import styled from 'styled-components'

const SignUpInButton = styled.button`
    height: 40px;
    width: 99px;
    background-color: white;
    border-color: ${props => (props.secondary ? props.theme.secondaryColour : props.theme.primaryColour)};
    border-width: 2px;
    border-style: solid;
    border-radius: 5px;
    color: ${props => (props.secondary ? props.theme.secondaryColour : props.theme.primaryColour)};
    margin-right: ${props => (props.secondary ? "15px" : 0)};
    font-size: 12px;

  :hover {
    background-color: ${props => (props.secondary ? props.theme.secondaryColour : props.theme.primaryColour)};
    color: white;
    cursor: pointer;
  }

  :focus {
      outline: none;
    }

`

export default SignUpInButton
