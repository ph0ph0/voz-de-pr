import React from "react";
import { storiesOf } from "@storybook/react";

import SwitchStateButton from "../SwitchStateButton";
import { mockAPI } from "../../../DisplayWrappers/SignUpInCard/API/__mocks__/mockApi";

storiesOf("Primitive|Buttons/SignUpInCard/SwitchStateButton", module)
  .add("Sign In Card", () => <SwitchStateButton api={mockAPI} />)
  .add("Sign Up Card", () => <SwitchStateButton api={mockAPI} />);
