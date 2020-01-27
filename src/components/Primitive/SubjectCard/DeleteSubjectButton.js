import styled from "styled-components";

import { ReactComponent as Delete } from "../../../assets/SubjectCard/Delete.svg";

const DeleteButton = styled(Delete)`
  /* border: 1px solid tan; */
  width: 20px;
  height: 22px;

  margin-left: 8px;

  :hover {
    cursor: pointer;
  }
`;

export default DeleteButton;
