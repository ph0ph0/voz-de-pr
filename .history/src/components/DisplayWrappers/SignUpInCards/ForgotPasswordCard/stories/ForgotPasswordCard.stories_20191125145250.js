import React from "react";
import { storiesOf } from "@storybook/react";

import ForgotPasswordCard from "../ForgotPasswordCard";

import api from "../API/ForgotPasswordApi";

storiesOf(
  "DisplayWrappers|SignUpInCards/ForgotPasswordCard/ForgotPasswordCard",
  module
).add("Standard", () => <ForgotPasswordCard api={api} />);
