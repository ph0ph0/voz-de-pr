import React from "react";
import styled from "styled-components";

import SignInCard from "../DisplayWrappers/SignUpInCards/SignInCard/SignInCard";

const SignInWrapper = ({ ...props }) => {
  return (
    <div {...props}>
      <SignInCard />
    </div>
  );
};

const SignIn = styled(SignInWrapper)`
  margin-bottom: 50px;

  display: flex;
  justify-content: center;
`;

export default SignIn;
