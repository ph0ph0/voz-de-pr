import styled from "styled-components";

const LogoutButton = styled.button`
  height: 40px;
  width: 99px;
  background-color: white;
  border-color: #929597;
  border-width: 2px;
  border-style: solid;
  border-radius: 5px;
  color: #929597;
  margin-right: 0px;
  font-size: 12px;

  :hover {
    background-color: #929597;
    color: white;
    cursor: pointer;
  }

  :focus {
    outline: none;
  }
`;

export default LogoutButton;
