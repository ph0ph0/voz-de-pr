import styled from "styled-components";
import React from "react";

const PasswordInputWrapper = ({ placeholder, ...props }) => {
  return <input {...props} placeholder={placeholder} type="password" />;
};

const PasswordField = styled(PasswordInputWrapper)`
  border: 1px solid #d8d8d8;

  margin-top: ${props => (props.api.listOpen ? "61px" : "0px")};
  /* border: 1px solid red; */
  /* Still need to add a radius to the border as otherwise it cuts off the parent radius */
  border-radius: 5px;
  width: 100%;
  height: 37px;
  box-sizing: border-box;

  padding-left: 25px;
  margin-bottom: 20px;

  line-height: 2.4em;
  font-size: 20px;

  :focus {
    outline: 0;
  }
`;

export default PasswordField;
