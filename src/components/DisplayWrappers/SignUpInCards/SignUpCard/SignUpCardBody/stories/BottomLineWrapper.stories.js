import React from "react";
import { storiesOf } from "@storybook/react";

import BottomLineWrapper from "../SignUpBottomLineWrapper";
import { mockApi } from "../../API/__mocks__/mockApi";

storiesOf(
  "DisplayWrappers|SignUpInCards/SignUpCard/SignUpBottomLineWrapper/BottomLineWrapper",
  module
)
  .add("SignIn", () => <BottomLineWrapper api={mockApi} />)
  .add("SignUp", () => <BottomLineWrapper api={mockApi} />);
