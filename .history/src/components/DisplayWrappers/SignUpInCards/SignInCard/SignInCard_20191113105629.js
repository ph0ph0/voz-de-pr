import React from "react";

import SignUpInCardLayout from "../General/SignUpInCardLayout";
import SignInCardBody from "./SignInCardBody/SignInCardBody";
import SideGraphic from "../SignUpCard/SignUpCardBody/SignUpSideGraphic";

const SignInCard = ({ api, ...props }) => {
  return (
    <SignUpInCardLayout>
      <SideGraphic />
      <SignInCardBody api={api} />
    </SignUpInCardLayout>
  );
};

export default SignInCard;
