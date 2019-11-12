import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { SignUpInCardApiPropTypes } from "./API/proptypes/SignUpInCardApiPropTypes";

import SignUpCardBody from "./SignUpInCardBody/SignUpInCardBody";
import SideGraphic from "./SignUpInCardBody/SignUpInSideGraphic";

const SignUpInCardWrapper = ({ isSignUp, api, ...props }) => {
  return (
    <div {...props}>
      <SideGraphic isSignUp={api.isSignUp} />
      <SignUpCardBody api={api} />
    </div>
  );
};

//auto

const SignUpInCard = styled(SignUpInCardWrapper)`
  /* border: 1px solid black; */
  width: 752px;
  height: ${props => (props.isSignUp ? "auto" : "616px")};
  /* padding-bottom: ${props => (props.isSignUp ? "76px" : "616px")}; */
  padding-bottom: 100px;
  box-sizing: border-box;
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

SignUpInCard.propTypes = {
  api: PropTypes.shape({ SignUpInCardApiPropTypes })
};

export default SignUpInCard;
