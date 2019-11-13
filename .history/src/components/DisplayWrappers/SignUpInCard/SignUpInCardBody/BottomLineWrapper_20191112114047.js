import React from "react";
import styled from "styled-components";

import SwitchStateButton from "../../../Primitive/SignUpInCard/SwitchStateButton";

const BottomLineWrapperWrapper = ({ api, ...props }) => {
  return (
    <div {...props}>
      {api.isSignUp
        ? "Already got a voice on Voz de Puerto Rico?"
        : "New to Voz de Puerto Rico?"}
      <SwitchStateButton onClick={api.toggleSignUp} api={api} />
    </div>
  );
};

const BottomLineWrapper = styled(BottomLineWrapperWrapper)`
  color: rgba(135, 138, 140, 1);
  font-size: 14px;
  margin-bottom: 100px;
`;

export default BottomLineWrapper;
