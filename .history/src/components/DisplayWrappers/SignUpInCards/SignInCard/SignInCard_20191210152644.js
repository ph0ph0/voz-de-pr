import React from "react";

import SignUpInCardLayout from "../General/SignUpInCardLayout";
import SignInCardBody from "./SignInCardBody/SignInCardBody";
import SideGraphic from "./SignInCardBody/SignInSideGraphic";
import SignInCardApiPropTypes from "./API/proptypes/SignUpCardApiPropTypes";

const SignInCard = ({ api }) => {
  return (
    <SignUpInCardLayout>
      <SideGraphic data-testid="SideGraphic" />
      <SignInCardBody api={api} data-testid="SignInCardBody" />
      <label htmlFor="multi">
        <p>PRESS</p>
      </label>
      <input type="file" id="multi" multiple hidden={true}}/>
    </SignUpInCardLayout>
  );
};

SignInCard.propTypes = {
  api: SignInCardApiPropTypes
};

export default SignInCard;
