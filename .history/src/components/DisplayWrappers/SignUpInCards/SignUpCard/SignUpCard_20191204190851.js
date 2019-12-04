import React from "react";

import { SignUpInCardApiPropTypes } from "./API/proptypes/SignUpCardApiPropTypes";

import SignUpInCardLayout from "../General/SignUpInCardLayout";
import SignUpCardBody from "./SignUpCardBody/SignUpCardBody";
import SideGraphic from "./SignUpCardBody/SignUpSideGraphic";

const SignUpInCard = ({ api }) => {
  return (
    <SignUpInCardLayout>
      <SideGraphic />
      <SignUpCardBody api={api} />
    </SignUpInCardLayout>
  );
};

SignUpInCard.propTypes = {
  api: SignUpInCardApiPropTypes
};

export default SignUpInCard;
