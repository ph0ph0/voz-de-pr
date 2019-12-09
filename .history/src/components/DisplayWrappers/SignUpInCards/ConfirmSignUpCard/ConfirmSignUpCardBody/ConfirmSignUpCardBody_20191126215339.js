import React from "react";
import styled from "styled-components";

import Logo from "../../../../Primitive/SignInCard/SignInLogo";
import EmailField from "../../../../Primitive/SignInCard/EmailField";
import ActionButton from "../../../../Primitive/General/ActionButton";
import Error from "../../../../Primitive/General/ErrorText";
import LoadingSpinner from "../../../../Primitive/General/LoadingSpinner";

const ConfirmSignUpCardBodyWrapper = ({ ...props }) => {
  return <div {...props}></div>;
};

const ConfirmSignUpCardBOdy = styled(ConfirmSignUpCardBodyWrapper)``;

export default ConfirmSignUpCardBOdy;
