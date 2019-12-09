import React from "react";
import styled from "styled-components";

import Logo from "../../../../Primitive/SignInCard/SignInLogo";
import EmailField from "../../../../Primitive/SignInCard/EmailField";
import ActionButton from "../../../../Primitive/General/ActionButton";
import Error from "../../../../Primitive/General/ErrorText";
import LoadingSpinner from "../../../../Primitive/General/LoadingSpinner";

const ConfirmSignUpCardBodyWrapper = ({ api, ...props }) => {
  return (
    <div {...props}>
      <Logo />
      <EmailField
        value={api.emailValue}
        onChange={api.updateEmailValue}
        placeholder={"Confirmation Code"}
      />
      {api.error && <Error>{api.error.message}</Error>}
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
