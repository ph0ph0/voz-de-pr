import styled from "styled-components";

const SubjectType = styled.div`
  /* border: 1px solid magenta; */
  width: 50%;
  height: 22px;

  color: ${props =>
    props.secondary ? props.theme.secondaryColour : props.theme.primaryColour};

  font-size: 16px;
  text-align: right;
`;

export default SubjectType;
