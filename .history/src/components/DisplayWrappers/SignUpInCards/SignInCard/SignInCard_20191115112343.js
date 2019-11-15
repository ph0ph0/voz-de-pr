import React from "react";

import SignUpInCardLayout from "../General/SignUpInCardLayout";
import SignInCardBody from "./SignInCardBody/SignInCardBody";
import SideGraphic from "./SignInCardBody/SignInSideGraphic";

const SignInCard = ({ api, ...props }) => {
  return (
    <SignUpInCardLayout>
      <SideGraphic data-testid="SideGraphic" />
      <SignInCardBody api={api} />
    </SignUpInCardLayout>
  );
};

export default SignInCard;
