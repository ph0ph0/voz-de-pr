import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { SignUpInCardApiPropTypes } from "./API/proptypes/SignUpCardApiPropTypes";

import SignUpCardBody from "./SignUpCardBody/SignUpCardBody";
import SideGraphic from "./SignUpCardBody/SignUpSideGraphic";

const SignUpInCardWrapper = ({ api, showSignUp, ...props }) => {
  window.log(`isSignUp in SignUpInCard?: ${api.isSignUp}`);

  //This is used to toggle the panel when the user clicks on the SignUp/LogIn buttons of the NavBar
  // if (api.isSignUp === true && showSignUp === false) {
  //   api.toggleSignUp();
  // } else if (api.isSignUp === false && showSignUp === true) {
  //   api.toggleSignUp();
  // }

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
  height: auto;
  margin-top: 20px;

  overflow: hidden;

  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);

  display: flex;
  flex-direction: row;
`;

SignUpInCard.propTypes = {
  api: PropTypes.shape({ SignUpInCardApiPropTypes })
};

export default SignUpInCard;
