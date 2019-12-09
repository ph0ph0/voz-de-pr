import React from "react";
import styled from "styled-components";

const ForgotPasswordCardBodyWrapper = ({ ...props }) => {
  return <div {...props}></div>;
};

const ForgotPasswordCard = styled(ForgotPasswordCardBodyWrapper)`
  width: 468px;
  height: auto;

  margin-left: 41px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ForgotPasswordCard;
