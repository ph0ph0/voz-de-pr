import styled from 'styled-components'

const ActionButton = styled.button`
    width: 125px;
    height: 40px;

    /* margin-top: ${props => (props.secondary ? "20px" : "20px")}; */
    /* margin-bottom: ${props => (props.secondary ? "-22px" : "17px")} */

    color: white;
    font-family: Avenir;
    font-size: 14px;
    background-color: ${props => (props.secondary ? "#1B4EA0" : "#EC220D")};
    border-radius: 5px;
    border: none;

    /* The & references the class itself (ActionButton). The "+" references a sibling, so the CSS says if ActionButton is a sibling of Action button do xyz */
    & + & {
        margin-top: 20px
    }

`

export default ActionButton