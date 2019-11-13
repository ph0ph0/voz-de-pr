import React from "react";
import styled from "styled-components";

const SignUpInCardLayoutWrapper = ({ children, ...props }) => {
  window.log(`isSignUp in SignUpInCard?: ${api.isSignUp}`);

  return <div {...props}>{children}</div>;
};

//auto

const SignUpInCardLayout = styled(SignUpInCardLayoutWrapper)`
  /* border: 1px solid black; */
  width: 752px;
  height: auto;
  margin-top: 20px;

  overflow: hidden;

  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);

  display: flex;
  flex-direction: row;
`;

export default SignUpInCardLayout;
