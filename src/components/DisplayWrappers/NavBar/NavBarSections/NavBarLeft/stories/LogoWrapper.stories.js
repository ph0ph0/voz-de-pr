import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import LogoWrapper from "../LogoWrapper";

export const actions = {
  onClick: action("clicked")
};

storiesOf("DisplayWrappers|NavBar/LogoWrapper", module)
  .add("Standard", () => <LogoWrapper {...actions} />, {
    notes: "Wraps around the VdPR logo, for display purposes so that it is placed in the NavBarLeft wrapper properly"
  });