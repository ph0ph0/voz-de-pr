import React from "react";
import { storiesOf } from "@storybook/react";

import ErrorText from "../ErrorText";

storiesOf("Primitive|text/ErrorText", module)
  .add("standard", () => <ErrorText>Error</ErrorText>);