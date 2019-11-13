import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { SignUpInCardApiPropTypes } from "./API/proptypes/SignUpCardApiPropTypes";

import SignUpCardBody from "./SignUpCardBody/SignUpCardBody";
import SideGraphic from "./SignUpCardBody/SignUpSideGraphic";

const SignUpInCardWrapper = ({ api, ...props }) => {
  window.log(`isSignUp in SignUpInCard?: ${api.isSignUp}`);

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
