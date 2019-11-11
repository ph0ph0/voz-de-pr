import React from "react";
import styled from "styled-components";

const Wrapper = ({ ...props }) => {
  return (
    <div {...props}>
      <SideSVG />
    </div>
  );
};

const SignUpInSideGraphic = styled(Wrapper)`
  border: 1px solid red;
  /* margin-top: 1000px; */
  background-color: #bfe4fc;
`;

export default SignUpInSideGraphic;
