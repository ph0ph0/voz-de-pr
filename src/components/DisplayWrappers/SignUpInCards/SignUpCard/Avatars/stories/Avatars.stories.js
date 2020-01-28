import React from "react";
import { storiesOf } from "@storybook/react";

import Avatars from "../Avatars";

import { mockApi } from "../../API/__mocks__/mockApi";

storiesOf(
  "DisplayWrappers|SignUpInCards/SignUpCard/Avatars/Avatars",
  module
).add("Standard", () => <Avatars api={mockApi} />, {
  notes:
    "*PROPS; selectedAvatar, onClickAv* This is the avatar display for the SidePanel_Profile"
});
