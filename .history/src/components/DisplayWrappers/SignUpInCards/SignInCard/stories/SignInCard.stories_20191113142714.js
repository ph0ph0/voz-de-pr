import React from "react";
import { storiesOf } from "@storybook/react";

import SignInCard from "../SignInCard";

storiesOf(
  "DisplayWrappers|SignUpInCards/SignInCard/SignIncard",
  module
).add("Standard", () => <SignInCard />);
