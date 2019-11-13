import React from "react";
import { storiesOf } from "@storybook/react";

import DropDown from "../DropDown";

import { mockApi } from "../../API/__mocks__/mockApi";

storiesOf(
  "DisplayWrappers|SignUpInCards/SignUpCard/DropDown/DropDown",
  module
).add("Standard", () => <DropDown api={mockApi} />, {
  notes:
    "*Props; toggleList: function to open and close the list, onChangeLocationValue: keeps track of the locationInput value, locationValue:, onLocationSelected: function for setting the selected location in the dropdown, resetDropDown:* This is the dropdown for the SidePanel_Profile"
});
