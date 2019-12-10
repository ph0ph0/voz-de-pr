import React from "react";
import styled from "styled-components";

import SignUpInCardLayout from "../General/SignUpInCardLayout";
import SignInCardBody from "./SignInCardBody/SignInCardBody";
import SideGraphic from "./SignInCardBody/SignInSideGraphic";
import SignInCardApiPropTypes from "./API/proptypes/SignUpCardApiPropTypes";

const I = styled.input`
  visibility: hidden;
`;

const SignInCard = ({ api }) => {
  return (
    <div>
      <SignUpInCardLayout>
        <SideGraphic data-testid="SideGraphic" />
        <SignInCardBody api={api} data-testid="SignInCardBody" />
      </SignUpInCardLayout>
      <button htmlFor="multi">
        <p>PRESS</p>
      </button>
      <I type="file" id="multi" multiple />
    </div>
  );
};

SignInCard.propTypes = {
  api: SignInCardApiPropTypes
};

export default SignInCard;
