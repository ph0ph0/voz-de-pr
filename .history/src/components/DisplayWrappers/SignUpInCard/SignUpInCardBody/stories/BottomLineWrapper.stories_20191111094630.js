import React from "react";
import { storiesOf } from "@storybook/react";

import BottomLineWrapper from "../BottomLineWrapper";
import api from "../../API/__mocks__/mockApi";

storiesOf(
  "DisplayWrappers|SignUpInCard/BottomLineWrapper/BottomLineWrapper",
  module
)
  .add("SignIn", () => <BottomLineWrapper />)
  .add("SignUp", () => <BottomLineWrapper api={api} />);
