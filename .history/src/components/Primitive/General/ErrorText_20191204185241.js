import React from "react";
import styled from "styled-components";

const ErrorTextWrapper = ({children, ...props}) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};

const ErrorText = styled(ErrorTextWrapper)`
    color: red;
    font-size: 12;

    padding: 0px;
    margin: 0px;
`;

export default ErrorText;