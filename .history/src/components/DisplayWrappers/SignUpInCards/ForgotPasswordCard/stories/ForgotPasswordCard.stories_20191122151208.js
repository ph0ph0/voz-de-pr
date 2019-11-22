import React from "react";
import { storiesOf } from "@storybook/react";

import ForgotPasswordCard from "../ForgotPasswordCard";

storiesOf(
  "DisplayWrappers|SignUpInCards/ForgotPasswordCard/ForgotPasswordCard",
  module
).add("Standard", () => <ForgotPasswordCard />);
