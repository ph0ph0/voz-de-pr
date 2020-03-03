import styled from "styled-components";

export const Filter = styled.button`
  border: none;
  /* border: 1px solid burlywood; */
  height: 19px;
  font-size: 14px;
  color: #6e6f70;
  background-color: #fff;
  :focus {
    outline: none;
  }

  :hover {
    color: #1b4ea0;
  }
`;

export const FilterRedProfile = styled(Filter)`
  :hover {
    color: ${props => props.theme.primaryColour};
  }
`;
export const FilterBlueProfile = styled(Filter)`
  :hover {
    color: ${props => props.theme.secondaryColour};
  }
`;
