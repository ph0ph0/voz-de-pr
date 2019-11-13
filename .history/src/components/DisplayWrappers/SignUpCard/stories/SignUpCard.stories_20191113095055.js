import React from "react";
import { storiesOf } from "@storybook/react";

import SignUpInCard from "../SignUpCard";
import { mockApi } from "../API/__mocks__/mockApi";

storiesOf("DisplayWrappers|SignUpInCard/SignUpInCard", module)
  .add("SignUp", () => <SignUpInCard api={mockApi} />)
  .add("SignIn", () => <SignUpInCard api={mockApi} />);
