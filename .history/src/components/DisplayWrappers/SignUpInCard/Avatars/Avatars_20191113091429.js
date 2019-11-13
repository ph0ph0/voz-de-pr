import React from "react";
import styled from "styled-components";

import { SignUpInCardApiPropTypes } from "../API/proptypes/SignUpInCardApiPropTypes";

import AvatarRowWithFive from "./AvatarRowWithFive";
import Person from "../../../../assets/General/Person.png";

//This needs to be altered when we have access to the avatars!

const AvatarsArray = [
  Person,
  Person,
  Person,
  Person,
  Person,
  Person,
  Person,
  Person,
  Person,
  Person
];

const AvatarsWrapper = ({ api, ...props }) => {
  //Note that objects can only have string keys, so the keys are converted to a string.

  const RowOne = {
    0: AvatarsArray[0],
    1: AvatarsArray[1],
    2: AvatarsArray[2],
    3: AvatarsArray[3],
    4: AvatarsArray[4]
  };

  const RowTwo = {
    5: AvatarsArray[5],
    6: AvatarsArray[6],
    7: AvatarsArray[7],
    8: AvatarsArray[8],
    9: AvatarsArray[9]
  };

  return (
    <div {...props}>
      <AvatarRowWithFive avatars={RowOne} api={api} />
      <AvatarRowWithFive avatars={RowTwo} api={api} />
    </div>
  );
};

const Avatars = styled(AvatarsWrapper)`
  /* border: 1px solid red; */
  width: auto;
  height: auto;

  padding: 0px;
  margin: 0px;

  display: flex;
  flex-direction: column;
`;

Avatars.propTypes = {
  api: SignUpInCardApiPropTypes
};

export default Avatars;
