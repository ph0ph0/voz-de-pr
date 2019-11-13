import React from "react";
import { storiesOf } from "@storybook/react";

import SignUpInSideGraphic from "../SignUpSideGraphic";

storiesOf(
  "DisplayWrappers|SignUpInCards/SignUpCard/SignUpInCardBody/SignUpInSideGraphic",
  module
)
  .add("SignIn", () => <SignUpInSideGraphic />)
  .add("SignUp", () => <SignUpInSideGraphic isSignUp />);
