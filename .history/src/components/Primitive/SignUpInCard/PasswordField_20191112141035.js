import styled from "styled-components";
import React from "react";

const PasswordInputWrapper = ({ placeholder, ...props }) => {
  return <input {...props} placeholder={placeholder} type="password" />;
};

const PasswordField = styled(PasswordInputWrapper)`
  border: ${props =>
    props.api.emailsMatch === false
      ? "1px solid red"
      : props.api.emailsMatch === true
      ? "1px solid green"
      : "1px solid #d8d8d8"};

  /* Need to push the password field up when the list is open so that it stays in the same place */
  margin-top: ${props => (props.api.listOpen ? "-150px" : "0px")};

  /* But we don't want the second password field, the 'Retype Password' field to be affected by the list open */
  & + & {
    margin-top: 0px};
  };
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
