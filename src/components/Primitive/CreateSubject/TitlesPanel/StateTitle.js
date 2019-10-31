import styled from 'styled-components'

const StateTitle = styled.p`
    /* border: 1px solid orange; */
    color: ${props =>
        (props.type === props.currentState) && props.secondary
        ? "#1B4EA0"
        : props.type === props.currentState
        ? "#EC220D"
        : "#C5C6C7"};
    font-size: 20px;

    margin: 0px;
    margin-left: 10px;
`

export default StateTitle