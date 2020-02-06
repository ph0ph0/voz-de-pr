import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import SwitchStateButton from "components/Primitive/SignUpCard/SwitchStateButton";

const BottomLineWrapperWrapper = ({ api, ...props }) => {
  const history = useHistory();

  function nagivateToLogIn() {
    history.push({
      pathname: "/signin"
    });
  }

  return (
    <div {...props}>
      ¿Ya tienes perfil? Iniciar Sesión?
      <SwitchStateButton onClick={nagivateToLogIn} isSignUp={true} />
    </div>
  );
};

const BottomLineWrapper = styled(BottomLineWrapperWrapper)`
  color: rgba(135, 138, 140, 1);
  font-size: 14px;
  /* This pushes the SignUpInCard height down so that we have a bit of space on the bottom of the card*/
  margin-bottom: 76px;
`;

export default BottomLineWrapper;
