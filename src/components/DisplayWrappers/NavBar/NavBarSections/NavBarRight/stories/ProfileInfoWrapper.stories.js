import { storiesOf } from "@storybook/react";
import React from "react";

import ProfileInfoWrapper from "../ProfileInfoWrapper";

const user = {
  firstName: "fN",
  lastName: "lN",
  email: "p@p.com"
};

storiesOf("DisplayWrappers|NavBar/ProfileInfoWrapper", module).add(
  "Standard",
  () => <ProfileInfoWrapper user={user} />,
  {
    notes:
      "This wraps around two ProfileInfoNavBar components, which represent the profile name and email"
  }
);
