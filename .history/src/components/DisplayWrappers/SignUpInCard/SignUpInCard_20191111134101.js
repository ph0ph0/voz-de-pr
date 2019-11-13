import React from "react";
import styled from "styled-components";

import { ReactComponent as SidePanelSVG } from "../../../assets/SignUpInCard/SVG_SignUpInSidePanel.svg";
import SignUpCardBody from "./SignUpInCardBody/SignUpInCardBody";

const SignUpInCardWrapper = ({ isSignUp, api, ...props }) => {
  return (
    <div {...props}>
      <SidePanel isSignUp={api.isSignUp} />
      <SignUpCardBody api={api} />
    </div>
  );
};

const SidePanel = styled(SidePanelSVG)`
  /* border: 1px solid orange; */

  background-color: black;
  margin-top: ${props => (props.isSignUp ? "0px" : "-100px;")};
`;

//auto

const SignUpInCard = styled(SignUpInCardWrapper)`
  /* border: 1px solid black; */
  width: 752px;
  height: ${props => (props.isSignUp ? "auto" : "616px")};

  margin-top: 20px;

  overflow: hidden;

  /* padding-bottom: 30px; */

  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);

  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  /* align-items: center; */
`;

export default SignUpInCard;
