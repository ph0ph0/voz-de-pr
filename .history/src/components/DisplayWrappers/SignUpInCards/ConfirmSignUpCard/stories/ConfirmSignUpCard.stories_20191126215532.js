import React from "react";
import { storiesOf } from "@storybook/react";

import ConfirmSignUpCard from "../ConfirmSignUpCard";

storiesOf(
  "DisplayWrappers|SignUpInCards/ConfirmSignUpCard/ConfirmSignUpCard",
  module
).add("Standard", () => <ConfirmSignUpCard />);
