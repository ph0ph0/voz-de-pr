import styled, { keyframes } from "styled-components";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const rotate = keyframes`
    from {
        transform: rotate(0deg)
    } to {
        transform: rotate(360deg)
    }
`;

const LoadingSpinner = styled(faCircleNotch)`
  animation: ${rotate} infinite 2s linear;
`;

export default LoadingSpinner;
