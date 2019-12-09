import React from "react";
import styled from "styled-components";

import SideGraphic from "./SignInCardBody/SignInSideGraphic";
import SignUpInCardLayout from "../General/SignUpInCardLayout";
import ForgotPasswordCardBody from "./ForgotPasswordCardBody/ForgotPasswordCardBody";

const ForgotPasswordCard = ({ ...props }) => {
  return (
    <SignUpInCardLayout>
      <SideGraphic />
      <ForgotPasswordCardBody />
    </SignUpInCardLayout>
  );
};

export default ForgotPasswordCard;
