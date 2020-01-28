import React from "react";
import styled from "styled-components";

import ConfirmSignUpCard from "../DisplayWrappers/SignUpInCards/ConfirmSignUpCard/ConfirmSignUpCard";
import ConfirmSignUpCardAPI from "../DisplayWrappers/SignUpInCards/ConfirmSignUpCard/API/ConfirmSignUpCardAPI";
import useApi from "../../CustomHooks/useAPI";

const ConfirmSignUpWrapper = ({ ...props }) => {
  const api = useApi(ConfirmSignUpCardAPI, {
    codeValue: "",
    success: false,
    loading: false
  });
  return (
    <div {...props}>
      <ConfirmSignUpCard api={api} />
    </div>
  );
};

const ConfirmSignUp = styled(ConfirmSignUpWrapper)`
  margin-bottom: 50px;

  display: flex;
  justify-content: center;
`;

export default ConfirmSignUp;
