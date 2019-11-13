import React from "react";
import { storiesOf } from "@storybook/react";

import SignUpInCardLayout from "../SignUpInCardLayout";
import SideGraphic from "../../SignUpCard/SignUpCardBody/SignUpSideGraphic";
import SignUpCardBody from "../../SignUpCard/SignUpCardBody/SignUpCardBody";

storiesOf(
  "DisplayWrappers|SignUpInCard/General/SignUpInCardLayout",
  module
).add("SignUp", () => (
  <SignUpInCardLayout>
    <SideGraphic />
    <SignUpCardBody />
  </SignUpInCardLayout>
));
