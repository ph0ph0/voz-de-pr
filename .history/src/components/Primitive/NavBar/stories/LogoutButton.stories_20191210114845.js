import React from "react";
import { storiesOf } from "@storybook/react";

import LogoutButton from "../LogoutButton";

storiesOf("Primitive|Buttons/LogoutButton", module).add("Standard", () => (
  <LogoutButton />
));
