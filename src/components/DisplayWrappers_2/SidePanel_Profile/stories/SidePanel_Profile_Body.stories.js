import React from "react";
import { storiesOf } from "@storybook/react";

import SidePanel_Profile_Body from "../SidePanel_Profile_Body";

import { mockApi } from "../API/__mocks__/mockApi";

storiesOf("DisplayWrappers|SidePanel_Profile/SidePanel_Profile_Body", module)
  .add("Standard", () => <SidePanel_Profile_Body api = {mockApi}
  />, {
    notes: "*PROPS nameValue, onChangeNameValue, toggleList, onClickAv, listOpen, selectedAvatar, onChangeLocationValue, locationValue, onLocationSelected, resetDropDown.* This looks messy as it needs to be in a container and can't act as a standalone component"
  });