import React from "react";
import { storiesOf } from "@storybook/react";

import SubjectType from "../SubjectType";

storiesOf("Primitive|text/SubjectType", module)
  .add("Standard", () => <SubjectType />, {
    notes: "*PROPS; secondary: bool defines Cause or Post*"
  })
  .add("C", () => <SubjectType />)
  .add("P", () => <SubjectType secondary/>);