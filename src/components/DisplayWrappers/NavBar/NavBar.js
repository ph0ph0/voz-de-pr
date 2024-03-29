import React from "react";
import styled from "styled-components";

import NavBarLeft from "./NavBarSections/NavBarLeft/NavBarLeft";
import NavBarCentre from "./NavBarSections/NavBarCentre/NavBarCentre";
import NavBarRight from "./NavBarSections/NavBarRight/NavBarRight";

const Wrapper = props => {
  return (
    <div {...props}>
      <NavBarLeft />
      <NavBarCentre />
      <NavBarRight />
    </div>
  );
};

const NavBar = styled(Wrapper)`
  /* background-color: green; */
  background-color: white;
  display: flex;
  width: 100%;
  height: "72px";
  position: sticky;
  top: 0px;
  padding: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);

  /* z-index has to be high or when scrolling, other elements will scroll over it */
  z-index: 100;
`;

export default NavBar;
