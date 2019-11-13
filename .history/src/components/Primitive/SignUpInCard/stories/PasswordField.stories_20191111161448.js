import React from "react";
import { storiesOf } from "@storybook/react";

import PasswordField from "../PasswordField";
import { mockApi } from "../../../DisplayWrappers/SignUpInCard/API/__mocks__/mockApi";

storiesOf("Primitive|text/PasswordField", module).add("Standard", () => (
  <PasswordField api={mockApi} />
));
