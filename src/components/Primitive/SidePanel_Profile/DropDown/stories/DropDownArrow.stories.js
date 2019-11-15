import React from "react";
import { storiesOf } from "@storybook/react";

import DropDownArrow from "../DropDownArrow";

storiesOf("Primitive|Images/DropDownArrow", module)
  .add("Standard", () => <DropDownArrow />, {
    notes: "This is the drop down arrow for the Location drop down of the SidePanel_Profile"
  });