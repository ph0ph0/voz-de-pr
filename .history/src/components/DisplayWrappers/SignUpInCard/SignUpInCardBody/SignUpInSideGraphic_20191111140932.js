import React from "react";
import styled from "styled-components";

const SignUpInSideGraphicWrapper = ({ ...props }) => {
  return (
    <div {...props}>
      <SideSVG />
    </div>
  );
};

const SignUpInSideGraphic = styled(SignUpInSideGraphicWrapper)`
  border: 1px solid red;
  /* margin-top: 1000px; */
  background-color: #bfe4fc;
`;

export default SignUpInSideGraphic;
