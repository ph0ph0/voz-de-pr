import React from "react";
import styled from "styled-components";
import SignUpInLayout from "../General/SignUpInCardLayout";
import SideGraphic from "../SignInCard/SignInCardBody/SignInSideGraphic";

const ConfirmSignUpCardWrapper = ({ ...props }) => {
  return (
    <div {...props}>
      <SignUpInLayout>
        <SideGraphic />
        <ConfirmSignUpCardBody />
      </SignUpInLayout>
    </div>
  );
};

const ConfirmSignUpCard = styled(ConfirmSignUpCardWrapper)``;

export default ConfirmSignUpCard;
