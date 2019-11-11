import styled from "styled-components";

import TextField from "./SignUpInCardTextInput";

const PasswordField = styled(TextField)`
  /* Need to move this down when the dropdown opens so it stays in place */
  margin-top: ${props => (props.api.listOpen ? "61px" : "0px")};
`;

export default PasswordField;
