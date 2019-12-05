import React from "react";
import { storiesOf } from "@storybook/react";

import BubbleWrapper from "../BubbleWrapper";

storiesOf("DisplayWrappers|SubjectCard/BubbleWrapper", module)
  .add("Standard", () => <BubbleWrapper />);