import React from "react";
import styled from "styled-components";

import SignInSidePanelSVG from "../../../../Primitive/SignInCard/SignInSidePanelSVG";

const SignUpInSideGraphicWrapper = ({ isSignUp, ...props }) => {
  return (
    <div {...props}>
      <SignInSidePanelSVG />
    </div>
  );
};

const SignUpInSideGraphic = styled(SignUpInSideGraphicWrapper)`
  /* border: 1px solid red; */
  height: auto;
  /* margin-top: -100px; */
  background-color: #bfe4fc;
`;

export default SignUpInSideGraphic;
