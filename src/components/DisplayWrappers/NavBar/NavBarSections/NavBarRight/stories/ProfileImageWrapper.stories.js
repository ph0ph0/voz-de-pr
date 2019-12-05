import React from "react";
import { storiesOf } from "@storybook/react";

import ProfileImageWrapper from "../ProfileImageWrapper";

storiesOf("DisplayWrappers|NavBar/ProfileImageWrapper", module)
  .add("Standard", () => <ProfileImageWrapper />, {
    notes: "This is a wrapper for the profile image. A wrapper was needed so that it can be placed correctly in the ProfileWrapper"
  });