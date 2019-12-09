import React from "react";
import { storiesOf } from "@storybook/react";

import ConfirmSignUpCard from "../ConfirmSignUpCard";
import api from "../API/ConfirmSignUpCardAPI";

storiesOf(
  "DisplayWrappers|SignUpInCards/ConfirmSignUpCard/ConfirmSignUpCard",
  module
).add("Standard", () => <ConfirmSignUpCard api={api} />);
