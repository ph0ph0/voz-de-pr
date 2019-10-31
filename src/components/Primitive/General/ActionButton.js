import styled from 'styled-components'

import Info from '../SidePanel/Info'
import SidePanel_Profile_Body from '../../DisplayWrappers/SidePanel_Profile/SidePanel_Profile_Body'

const ActionButton = styled.button`
    width: 125px;
    height: 40px;

    /* margin-top: ${props => (props.secondary ? "20px" : "0")}; */
    /* margin-bottom: ${props => (props.secondary ? "-22px" : "17px")} */

    /* & + ${Info} {
        margin-top: ${props => (props.secondary ? "20px" : "0")};
    } */

    ${SidePanel_Profile_Body} + & {
        margin-top: ${props => (props.secondary ? "20px" : "0")};
    }

    color: white;
    font-size: 14px;
    background-color: ${props => (props.secondary ? props.theme.secondaryColour : props.theme.primaryColour)};
    border-radius: 5px;
    border: none;

    /* The & references the class itself (ActionButton). The "+" references a sibling, so the CSS says if ActionButton is a sibling of Action button do xyz */
    & + & {
        margin-top: 20px
    }

    :hover {
        cursor: pointer
    }

    :focus {
      outline: none;
    }

`

export default ActionButton