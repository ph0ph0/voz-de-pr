import React from "react";
import { storiesOf } from "@storybook/react";

import { mockApi } from "../../SignUpCard/API/__mocks__/mockApi";

import SignUpInCardLayout from "../SignUpInCardLayout";
import SideGraphic from "../../SignUpCard/SignUpCardBody/SignUpSideGraphic";
import SignUpCardBody from "../../SignUpCard/SignUpCardBody/SignUpCardBody";

storiesOf(
  "DisplayWrappers|SignUpInCards/General/SignUpInCardLayout",
  module
).add("SignUp", () => (
  <SignUpInCardLayout>
    <SideGraphic />
    <SignUpCardBody api={mockApi} />
  </SignUpInCardLayout>
));
