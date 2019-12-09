import React from "react";
import styled, { keyframes } from "styled-components";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const rotate = keyframes`
    from {
        transform: rotate(0deg)
    } to {
        transform: rotate(360deg)
    }
`;

const LoadingSpinnerWrapper = ({ ...props }) => {
  return <FontAwesomeIcon {...props} icon={faCircleNotch} color="#d8d8d8" />;
};

const LoadingSpinner = styled(LoadingSpinnerWrapper)`
  animation: ${rotate} infinite 20s linear;
`;

export default LoadingSpinner;
