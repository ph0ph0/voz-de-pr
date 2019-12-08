import React, { useEffect } from "react";
import styled from "styled-components";

import { useHistory, withRouter } from "react-router-dom";

import Logo from "components/Primitive/SignInCard/SignInLogo";
import EmailField from "components/Primitive/SignInCard/EmailField";
import ActionButton from "components/Primitive/General/ActionButton";
import Error from "components/Primitive/General/ErrorText";
import LoadingSpinner from "components/Primitive/General/LoadingSpinner";

const Info = styled.p`
  color: rgba(0, 0, 0, 0.54);
  font-size: 14px;
  padding: 0px;
  margin-bottom: 10px;

  & + & {
    margin-bottom: 100px;
  }
`;

const ConfirmSignUpCardBodyWrapper = withRouter(
  ({ staticContext, api, ...props }) => {
    const history = useHistory();

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
        <Info>Please check your email for your confirmation code.</Info>
        <Info>Do not close or navigate away from this page.</Info>
        <EmailField
          value={api.codeValue}
          onChange={event => api.updateCodeValue(event.target.value)}
          placeholder={"Confirmation Code"}
          type="number"
        />
        {api.error && <Error>{api.error.message}</Error>}
        <ActionButton
          data-testid="submitButton"
          onClick={() =>
            api.submit(
              props.location.state.email,
              props.location.state.password
            )
          }
        >
          {api.loading ? <LoadingSpinner /> : "CONFIRM"}
        </ActionButton>
      </div>
    );
  }
);

const ConfirmSignUpCardBOdy = styled(ConfirmSignUpCardBodyWrapper)`
  width: 468px;
  height: auto;

  margin-left: 41px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ConfirmSignUpCardBOdy;
