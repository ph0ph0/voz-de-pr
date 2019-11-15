import React from "react";
import { storiesOf } from "@storybook/react";

import Logo from "../Logo";

storiesOf("Primitive|Images/Logo", module)
  .add("Standard", () => <Logo />);