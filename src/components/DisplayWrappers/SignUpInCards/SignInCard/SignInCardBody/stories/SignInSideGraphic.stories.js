import React from "react";
import { storiesOf } from "@storybook/react";

import SignInSideGraphic from "../SignInSideGraphic";

storiesOf(
  "DisplayWrappers|SignUpInCards/SignInCard/SignInSideGraphic/SignInSideGraphic",
  module
).add("Standard", () => <SignInSideGraphic />);
