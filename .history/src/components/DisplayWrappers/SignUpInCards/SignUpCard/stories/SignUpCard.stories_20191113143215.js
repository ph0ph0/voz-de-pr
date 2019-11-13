import React from "react";
import { storiesOf } from "@storybook/react";

import SignUpCard from "../SignUpCard";
import { mockApi } from "../API/__mocks__/mockApi";

storiesOf(
  "DisplayWrappers|SignUpInCards/SignUpCard/SignUpCard",
  module
).add("SignUp", () => <SignUpCard api={mockApi} />);
