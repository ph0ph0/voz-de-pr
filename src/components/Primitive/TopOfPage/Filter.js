import React from 'react'
import styled from 'styled-components'

export const Filter = styled.button`
  font-size: 14px;
  color: #6e6f70;
  border: none;

  :hover {
    color: #1B4EA0;
  }
`;

export const FilterRedProfile = styled(Filter)`
  :hover {
    color: #EC220D
  }
`
export const FilterBlueProfile = styled(Filter)`
  :hover {
    color: #1B4EA0
  }
`