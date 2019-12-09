import React from "react";
import styled from "styled-components";

import ForgotPasswordCard from "../DisplayWrappers/SignUpInCards/ForgotPasswordCard/ForgotPasswordCard";
import ForgotPasswordApi from "../DisplayWrappers/SignUpInCards/ForgotPasswordCard/API/ForgotPasswordApi";
import useApi from "../../CustomHooks/useAPI";

const ForgotPasswordnWrapper = ({ ...props }) => {
  const api = useApi(ForgotPasswordApi, {
    emailValue: "",
    firstPasswordValue: "",
    secondPasswordValue: "",
    codeValue: "",
    content: "code",
    passwordsMatch: false
  });
  return (
    <div {...props}>
      <ForgotPasswordCard api={api} />
    </div>
  );
};

const ForgotPassword = styled(ForgotPasswordnWrapper)`
  margin-bottom: 50px;

  display: flex;
  justify-content: center;
`;

export default ForgotPassword;
