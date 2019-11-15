import React from "react";
import { storiesOf, action } from "@storybook/react";

import NameInput from "../NameInput";

import { mockApi } from "../../../DisplayWrappers/SidePanel_Profile/API/__mocks__/mockApi";

storiesOf("Primitive|Inputs/NameInput", module)
  .add("Standard", () => <NameInput api = {mockApi} />);