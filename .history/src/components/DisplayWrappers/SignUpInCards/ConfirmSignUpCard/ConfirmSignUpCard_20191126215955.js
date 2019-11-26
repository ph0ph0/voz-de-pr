import React from "react";
import styled from "styled-components";

import SignUpInLayout from "../General/SignUpInCardLayout";
import SideGraphic from "../SignInCard/SignInCardBody/SignInSideGraphic";
import ConfirmSignUpCardBody from "./ConfirmSignUpCardBody/ConfirmSignUpCardBody";

const ConfirmSignUpCardWrapper = ({ api, ...props }) => {
  return (
    <div {...props}>
      <SignUpInLayout>
        <SideGraphic />
        <ConfirmSignUpCardBody api={api} />
      </SignUpInLayout>
    </div>
  );
};

const ConfirmSignUpCard = styled(ConfirmSignUpCardWrapper)``;

export default ConfirmSignUpCard;
