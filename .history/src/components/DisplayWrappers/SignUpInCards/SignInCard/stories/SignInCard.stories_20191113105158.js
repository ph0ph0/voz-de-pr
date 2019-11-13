import React from "react";
import { storiesOf } from "@storybook/react";

import SignInCard from "../SignInCard";

storiesOf(
  "DisplayWrappers|SignUpInCards/SignIn/SignIncard",
  module
).add("Standard", () => <SignInCard />);
