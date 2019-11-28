import React from "react";

import { SignUpInCardApiPropTypes } from "./API/proptypes/SignUpCardApiPropTypes";

import SignUpInCardLayout from "../General/SignUpInCardLayout";
import SignUpCardBody from "./SignUpCardBody/SignUpCardBody";
import SideGraphic from "./SignUpCardBody/SignUpSideGraphic";

const SignUpCard = ({ api }) => {
  return (
    <SignUpInCardLayout>
      <SideGraphic />
      <SignUpCardBody api={api} />
    </SignUpInCardLayout>
  );
};

SignUpCard.propTypes = {
  api: SignUpInCardApiPropTypes
};

export default SignUpCard;
