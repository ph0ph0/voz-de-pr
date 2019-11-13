import React from "react";
import { storiesOf } from "@storybook/react";

import SwitchStateButton from "../SwitchStateButton";
import { mockApi } from "../../../DisplayWrappers/SignUpCard/API/__mocks__/mockApi";

storiesOf("Primitive|Buttons/SignUpInCard/SwitchStateButton", module)
  .add("Sign In Card", () => <SwitchStateButton api={mockApi} />)
  .add("Sign Up Card", () => <SwitchStateButton api={mockApi} />);
