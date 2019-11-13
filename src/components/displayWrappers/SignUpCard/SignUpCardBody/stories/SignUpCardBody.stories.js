import React from "react";
import { storiesOf } from "@storybook/react";

import SignUpInCardBody from "../SignUpCardBody";
import { mockApi } from "../../API/__mocks__/mockApi";

storiesOf(
  "DisplayWrappers|SignUpCard/SignUpInCardBody/SignUpInCardBody",
  module
).add("Standard", () => <SignUpInCardBody api={mockApi} />);
