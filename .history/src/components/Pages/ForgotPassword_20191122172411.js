import React from "react";
import styled from "styled-components";

import ForgotPasswordCard from "../DisplayWrappers/SignUpInCards/ForgotPasswordCard/ForgotPasswordCard";
import SignInApi from "../DisplayWrappers/SignUpInCards/SignInCard/API/SignInCardApi";
import useApi from "../../CustomHooks/useAPI";

const ForgotPasswordnWrapper = ({ ...props }) => {
  const api = useApi(SignInApi, {
    emailValue: "",
    firstPasswordValue: "",
    secondPasswordValue: "",
    codeValue: "",
    content: "email"
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
