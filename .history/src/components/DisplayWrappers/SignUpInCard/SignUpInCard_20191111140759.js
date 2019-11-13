import React from "react";
import styled from "styled-components";

import { ReactComponent as SidePanelSVG } from "../../../assets/SignUpInCard/SVG_SignUpInSidePanel.svg";
import SignUpCardBody from "./SignUpInCardBody/SignUpInCardBody";
import SideSVG from "../../Primitive/SignUpInCard/SignUpInCardSidePanelSVG";

const Wrapper = ({ ...props }) => {
  return (
    <div {...props}>
      <SideSVG />
    </div>
  );
};

const Saca = styled(Wrapper)`
  border: 1px solid red;
  /* margin-top: 1000px; */
  background-color: #bfe4fc;
`;

const SignUpInCardWrapper = ({ isSignUp, api, ...props }) => {
  return (
    <div {...props}>
      <Saca isSignUp={api.isSignUp} />
      <SignUpCardBody api={api} />
    </div>
  );
};

const SidePanelGraphic = styled(SidePanelSVG)`
  border: 1px solid orange;
  background-color: black;
  padding-bottom: 600px;

  margin-top: ${props => (props.isSignUp ? "0px" : "-100px;")};
`;

const SidePanelWrapper = ({ ...props }) => {
  return (
    <div>
      <SidePanelGraphic />
    </div>
  );
};

const SidePanel = styled(SidePanelWrapper)`
  border: 1px solid black;
  height: auto;
  background-color: black;
`;

//auto

const SignUpInCard = styled(SignUpInCardWrapper)`
  /* border: 1px solid black; */
  width: 752px;
  height: ${props => (props.isSignUp ? "auto" : "616px")};
  /* padding-bottom: ${props => (props.isSignUp ? "76px" : "616px")}; */
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
