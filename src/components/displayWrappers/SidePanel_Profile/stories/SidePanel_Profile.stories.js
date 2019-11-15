import React from "react";
import { storiesOf } from "@storybook/react";

import SidePanel_Profile from "../SidePanel_Profile";

storiesOf("DisplayWrappers|SidePanel_Profile/SidePanelProfile", module)
  .add("Standard", () => <SidePanel_Profile />);