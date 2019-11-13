import React from "react";
import { storiesOf } from "@storybook/react";

import SignUpInCardLayout from "../SignUpInCardLayout";

storiesOf(
  "DisplayWrappers|SignUpInCard/General/SignUpInCardLayout",
  module
).add("Standard", () => <SignUpInCardLayout />);
