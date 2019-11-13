import React from "react";
import { storiesOf } from "@storybook/react";

import SignInCard from "../SignInCard";
import { mockApi } from "../API/__mocks__/mockApi";

storiesOf(
  "DisplayWrappers|SignUpInCards/SignInCard/SignIncard",
  module
).add("Standard", () => <SignInCard api={mockApi} />);
