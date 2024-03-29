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

const LoadingSpinnerWrapper = ({ colour, center, ...props }) => {
  return (
    <FontAwesomeIcon
      {...props}
      icon={faCircleNotch}
      color={colour ? colour : "#FFF"}
    />
  );
};

const LoadingSpinner = styled(LoadingSpinnerWrapper)`
  animation: ${rotate} infinite 2s linear;
  margin-left: ${props => props.center && "auto"};
  margin-right: ${props => props.center && "auto"};
`;

export default LoadingSpinner;
