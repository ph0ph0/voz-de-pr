import React from "react";
import styled from "styled-components";

//withRouter allows us to push the history so that we can navigate, but we need to remove staticContext from the props!
import { withRouter } from "react-router-dom";

import { ReactComponent as Logo } from "assets/General/Logo.svg";

const Wrapper = ({ staticContext, ...props }) => {
  //staticContext allows props.history.push()
  function onClick() {
    console.log("Clicked LogoWrapper");
    props.history.push("/");
  }

  return (
    <div {...props}>
      <Logo onClick={onClick} />
    </div>
  );
};

const LogoWrapper = styled(Wrapper)`
  /* border: 2px solid orange; */
  height: 100%;
  width: 80%;

  margin-left: 15px;

  display: flex;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

export default withRouter(LogoWrapper);
