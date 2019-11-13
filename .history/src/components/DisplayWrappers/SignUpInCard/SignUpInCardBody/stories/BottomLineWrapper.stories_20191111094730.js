import React from "react";
import { storiesOf } from "@storybook/react";

import BottomLineWrapper from "../BottomLineWrapper";
import { mockApi } from "../../API/__mocks__/mockApi";

storiesOf(
  "DisplayWrappers|SignUpInCard/BottomLineWrapper/BottomLineWrapper",
  module
)
  .add("SignIn", () => <BottomLineWrapper api={mockApi} />)
  .add("SignUp", () => <BottomLineWrapper api={mockApi} />);
