import React from "react";
import styled from "styled-components";

import SideSVG from "../../../../Primitive/SignUpCard/SignUpCardSidePanelSVG";

const SignUpInSideGraphicWrapper = ({ isSignUp, ...props }) => {
  return (
    <div {...props}>
      <SideSVG />
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
