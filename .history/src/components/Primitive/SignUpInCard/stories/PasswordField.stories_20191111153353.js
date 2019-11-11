import React from "react";
import { storiesOf } from "@storybook/react";

import PasswordField from "../PasswordField";

storiesOf("Primitive|text/PasswordField", module).add("Standard", () => (
  <PasswordField />
));
