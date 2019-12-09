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
  return (
    <div {...props}>
      <FontAwesomeIcon icon={faCircleNotch} color="#d8d8d8" />
    </div>
  );
};

const LoadingSpinner = styled(LoadingSpinnerWrapper)`
  animation: ${rotate} infinite 2s linear;
`;

export default LoadingSpinner;
