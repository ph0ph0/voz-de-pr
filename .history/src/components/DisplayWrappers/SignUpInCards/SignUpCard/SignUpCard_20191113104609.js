import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { SignUpInCardApiPropTypes } from "./API/proptypes/SignUpCardApiPropTypes";

import SignUpInCardLayout from "../General/SignUpInCardLayout";
import SignUpCardBody from "./SignUpCardBody/SignUpCardBody";
import SideGraphic from "./SignUpCardBody/SignUpSideGraphic";

const SignUpInCard = ({ api, ...props }) => {
  window.log(`isSignUp in SignUpInCard?: ${api.isSignUp}`);

  return (
    <SignUpInCardLayout>
      <SideGraphic />
      <SignUpCardBody api={api} />
    </SignUpInCardLayout>
  );
};

export default SignUpInCard;
