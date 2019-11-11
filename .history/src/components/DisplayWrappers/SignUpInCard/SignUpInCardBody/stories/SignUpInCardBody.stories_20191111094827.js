import React from "react";
import { storiesOf } from "@storybook/react";

import SignUpInCardBody from "../SignUpInCardBody";
import { mockApi } from "../../API/__mocks__/mockApi";

storiesOf(
  "DisplayWrappers|SignUpInCard/SignUpInCardBody/SignUpInCardBody",
  module
).add("Standard", () => <SignUpInCardBody api={mockApi} />);
