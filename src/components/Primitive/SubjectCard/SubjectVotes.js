import styled from "styled-components";

const Votes = styled.div`
    /* border: 1px solid cyan; */
    width: 50%;
    height: 22px;

    font-size: 16px;
    color: ${props => props.secondary ? props.theme.secondaryColour : props.theme.primaryColour};
    text-align: left;
`;

export default Votes;