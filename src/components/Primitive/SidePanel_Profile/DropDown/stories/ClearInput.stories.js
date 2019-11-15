import React from "react";
import { storiesOf } from "@storybook/react";

import ClearInput from "../ClearInput";

import { mockApi } from "../../../../DisplayWrappers/SidePanel_Profile/API/__mocks__/mockApi";

storiesOf("Primitive|Images/ClearInput", module)
  .add("Standard", () => <ClearInput api = {mockApi}/>, {
    notes: "This is the clear input button for the Location drop down of the SidePanel_Profile"
  });