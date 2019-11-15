import React from "react";
import { storiesOf } from "@storybook/react";

import SignUpInCardTextInput from "../SignUpCardTextInput";

storiesOf("Primitive|text/SignUpInCardTextInput", module)
  .add("Standard", () => <SignUpInCardTextInput placeholder = {"Name"}/>);