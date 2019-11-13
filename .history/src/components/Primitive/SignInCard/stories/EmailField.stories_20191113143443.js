import React from "react";
import { storiesOf } from "@storybook/react";

import EmailField from "../EmailField";

storiesOf("Primitive|text/EmailField", module).add("Standard", () => (
  <EmailField />
));
