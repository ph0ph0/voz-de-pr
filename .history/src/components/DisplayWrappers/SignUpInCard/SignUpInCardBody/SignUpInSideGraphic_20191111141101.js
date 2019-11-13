import React from "react";
import styled from "styled-components";

import SideSVG from "../../../Primitive/SignUpInCard/SignUpInCardSidePanelSVG";

const SignUpInSideGraphicWrapper = ({ ...props }) => {
  return (
    <div {...props}>
      <SideSVG />
    </div>
  );
};

const SignUpInSideGraphic = styled(SignUpInSideGraphicWrapper)`
  border: 1px solid red;
  background-color: #bfe4fc;
`;

export default SignUpInSideGraphic;
