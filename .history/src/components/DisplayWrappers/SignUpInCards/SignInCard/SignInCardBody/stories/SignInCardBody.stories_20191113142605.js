import React from "react";
import { storiesOf } from "@storybook/react";

import SignInCardBody from "../SignInCardBody";
import { mockApi } from "../../API/__mocks__/mockApi";

storiesOf(
  "DisplayWrappers|SignUpInCards/SignInCard/SignInCardBody/SignInCardBody",
  module
).add("Standard", () => <SignInCardBody api={mockApi} />);
