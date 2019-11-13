import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { SignUpInCardApiPropTypes } from "./API/proptypes/SignUpCardApiPropTypes";

import SignUpInCardLayout from "../General/SignUpInCardLayout";
import SignUpCardBody from "./SignUpCardBody/SignUpCardBody";
import SideGraphic from "./SignUpCardBody/SignUpSideGraphic";

const SignUpInCard = ({ api, ...props }) => {
  return (
    <SignUpInCardLayout>
      <SideGraphic />
      <SignUpCardBody api={api} />
    </SignUpInCardLayout>
  );
};

SignUpInCard.propTypes = {
  api: SignUpInCardApiPropTypes
};

export default SignUpInCard;
