import React from "react";
import { storiesOf } from "@storybook/react";

import Filters from "../Filters";

storiesOf("DisplayWrappers|TopOfPage/Filters", module)
  .add("Standard", () => <Filters />, {
    notes: "*PROPS; profileType: boolean if true shows profile filters*"
  })
  .add("ProfileType", () => <Filters profileType />);