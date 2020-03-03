import React from "react";
import { storiesOf } from "@storybook/react";

import ProfileWrapper from "../ProfileWrapper";

const user = {
  firstName: "fN",
  lastName: "lN",
  email: "p@p.com"
};

storiesOf("DisplayWrappers|NavBar/ProfileWrapper", module).add(
  "Standard",
  () => <ProfileWrapper user={user} />,
  {
    notes:
      "This wraps around the ProfileInfoWrapper and the ProfileImageWrapper"
  }
);
