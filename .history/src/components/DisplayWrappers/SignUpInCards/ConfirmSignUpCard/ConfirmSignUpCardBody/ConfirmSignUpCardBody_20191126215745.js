import React from "react";
import styled from "styled-components";

import Logo from "../../../../Primitive/SignInCard/SignInLogo";
import EmailField from "../../../../Primitive/SignInCard/EmailField";
import ActionButton from "../../../../Primitive/General/ActionButton";
import Error from "../../../../Primitive/General/ErrorText";
import LoadingSpinner from "../../../../Primitive/General/LoadingSpinner";

const ConfirmSignUpCardBodyWrapper = ({ ...props }) => {
  return (
    <div {...props}>
      <Logo />
      <EmailField />
      <ActionButton>
        {api.loading ? <LoadingSpinner /> : "CONFIRM"}
      </ActionButton>
    </div>
  );
};

const ConfirmSignUpCardBOdy = styled(ConfirmSignUpCardBodyWrapper)`
  width: 468px;
  height: auto;

  margin-left: 41px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ConfirmSignUpCardBOdy;
