import React from "react";
import { storiesOf } from "@storybook/react";

import LinkWrapper from "../LinkWrapper";

storiesOf("DisplayWrappers|NavBar/LinkWrapper", module)
  .add("Standard", () => <LinkWrapper />, {
    notes: "Wraps around the primitive LinkNavBar objects (Home, Causes, Posts and Profile)"
  });