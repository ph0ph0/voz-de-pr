import styled from "styled-components";

const SubjectLink = styled.a`
    text-align: justify;
    color: ${props => props.secondary ? props.theme.secondaryColour : props.theme.primaryColour};

    margin-bottom: 3px;
`;

export default SubjectLink;