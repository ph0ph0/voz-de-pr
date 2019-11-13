import React from "react";
import { storiesOf } from "@storybook/react";

import AvatarRowWithFive from "../AvatarRowWithFive";
import Person from "../../../../../assets/General/Person.png";

import { mockApi } from "../../API/__mocks__/mockApi";

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

const RowOne = {
  0: AvatarsArray[0],
  1: AvatarsArray[1],
  2: AvatarsArray[2],
  3: AvatarsArray[3],
  4: AvatarsArray[4]
};

storiesOf("DisplayWrappers/SignUpInCard/Avatars/AvatarRowWithFive", module).add(
  "Standard",
  () => <AvatarRowWithFive avatars={RowOne} api={mockApi} />,
  {
    notes:
      "*PROPS; avatars, onClickAv, selectedAvatar* This is the wrapper for the avatars in the SignUpInCard"
  }
);
