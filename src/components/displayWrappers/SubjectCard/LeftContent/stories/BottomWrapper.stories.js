import React from "react";
import { storiesOf } from "@storybook/react";

import BottomWrapper from "../BottomWrapper";

storiesOf("DisplayWrappers|SubjectCard/BottomWrapper", module)
  .add("0Comments", () => <BottomWrapper numberOfComments = {null} />)
  .add("1Comment", () => <BottomWrapper numberOfComments = {1} />)
  .add("ManyComments", () => <BottomWrapper numberOfComments = {100} />);