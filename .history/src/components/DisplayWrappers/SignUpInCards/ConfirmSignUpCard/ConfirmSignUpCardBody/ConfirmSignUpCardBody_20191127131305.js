import React, { useEffect } from "react";
import styled from "styled-components";

import { useHistory, withRouter } from "react-router-dom";

import Logo from "../../../../Primitive/SignInCard/SignInLogo";
import EmailField from "../../../../Primitive/SignInCard/EmailField";
import ActionButton from "../../../../Primitive/General/ActionButton";
import Error from "../../../../Primitive/General/ErrorText";
import LoadingSpinner from "../../../../Primitive/General/LoadingSpinner";

const Info = styled.p`
  color: rgba(0, 0, 0, 0.54);
  font-size: 14px;
  padding: 0px;
  margin: 10px;
`;

const ConfirmSignUpCardBodyWrapper = withRouter(({ api, ...props }) => {
  const history = useHistory();

  useEffect(() => {
    window.log(
      `email and password: ${props.location.state.email}, ${props.location.state.password}`
    );
  }, []);

  useEffect(() => {
    if (api.success) {
      history.push({
        pathname: "/"
      });
    }
  }, [api.success]);

  return (
    <div {...props}>
      <Logo />
      <Info>Please check your email for your confirmation code</Info>
      <EmailField
        value={api.codeValue}
        onChange={event => api.updateCodeValue(event.target.value)}
        placeholder={"Confirmation Code"}
      />
      {api.error && <Error>{api.error.message}</Error>}
      <ActionButton
        onClick={api.submit(
          props.location.state.email,
          props.location.state.password
        )}
      >
        {api.loading ? <LoadingSpinner /> : "CONFIRM"}
      </ActionButton>
    </div>
  );
});

const ConfirmSignUpCardBOdy = styled(ConfirmSignUpCardBodyWrapper)`
  width: 468px;
  height: auto;

  margin-left: 41px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ConfirmSignUpCardBOdy;
