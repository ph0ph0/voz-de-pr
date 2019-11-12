import React, { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { SignUpInCardApiPropTypes } from "./API/proptypes/SignUpInCardApiPropTypes";

import SignUpCardBody from "./SignUpInCardBody/SignUpInCardBody";
import SideGraphic from "./SignUpInCardBody/SignUpInSideGraphic";

const SignUpInCardWrapper = ({ api, x, ...props }) => {
  window.log(`isSignUp in SignUpInCard?: ${api.isSignUp}`);

  useEffect(() => {
    window.log(`x: ${x}`);
    if (api.isSignUp === true && x === false) {
      window.log(`toggling*****: ${x}`);
      api.toggleSignUp();
    } else if (api.isSignUp === false && x === true) {
      api.toggleSignUp();
    }
  });

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
  height: ${props => (props.api.isSignUp ? "auto" : "616px")};
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

SignUpInCard.propTypes = {
  api: PropTypes.shape({ SignUpInCardApiPropTypes })
};

export default SignUpInCard;
