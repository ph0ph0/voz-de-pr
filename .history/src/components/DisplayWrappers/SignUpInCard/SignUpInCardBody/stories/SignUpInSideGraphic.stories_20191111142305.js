import React from "react";
import { storiesOf } from "@storybook/react";

import SignUpInSideGraphic from "../SignUpInSideGraphic";

storiesOf(
  "DisplayWrappers|SignUpInCard/SignUpInCardBody/SignUpInSideGraphic",
  module
)
  .add("SignIn", () => <SignUpInSideGraphic />)
  .add("SignUp", () => <SignUpInSideGraphic isSignUp />);
