import React from "react";
import styled from "styled-components";

import SideGraphic from "./SignInCardBody/SignInSideGraphic";
import SignUpInCardLayout from "../General/SignUpInCardLayout";
import ForgotPasswordCardBody from "./ForgotPasswordCardBody/ForgotPasswordCardBody";

const ForgotPasswordCard = ({ api }) => {
  return (
    <SignUpInCardLayout>
      <SideGraphic />
      <ForgotPasswordCardBody api={api} />
    </SignUpInCardLayout>
  );
};

export default ForgotPasswordCard;
