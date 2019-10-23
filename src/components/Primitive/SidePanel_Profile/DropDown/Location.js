import React from 'react'
import styled from 'styled-components'

const LocationWrapper = ({ children, ...props }) => {
    return <li {...props}>{children}</li>;
  };
  
const Location = styled(LocationWrapper)`
    text-align: left;
    margin-top: 3px;
    margin-bottom: 3px;
    margin-left: 30px;
`;

export default Location