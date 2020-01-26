import React from "react";
import styled from "styled-components";

const VoteArrowWrapper = ({
  small,
  pointDown,
  colour = "#979797",
  ...props
}) => {
  return (
    <svg
      {...props}
      width="14px"
      height={small ? "17px" : "20px"}
      viewBox="0 0 14 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={colour} transform="translate(4, 0.000000)">
        <path
          id="Line"
          d="M3,0.476190476 L10,14.4761905 L4,14.476 L4,16.7142857 L2,16.7142857 L2,14.476 L-4,14.4761905 L3,0.476190476 Z"

          // transform="translate(4, 0.000000) rotate(90, -3, 0)"
        />
        <rect
          id="Rectangle"
          x="0"
          y="12.8571429"
          width="6"
          height="6.66666667"
        />
      </g>
    </svg>
  );
};

const VoteArrow = styled(VoteArrowWrapper)`
  /* border: 1px solid green; */
  margin-left: 10px;
  transform: ${props => (props.pointDown ? "rotate(180deg)" : "rotate(0deg)")};

  & + & {
    margin-left: ${props => (props.small ? "2px" : "16px")};
  }
`;

export default VoteArrow;
