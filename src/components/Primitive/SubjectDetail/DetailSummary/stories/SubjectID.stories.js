import React from "react";
import { storiesOf } from "@storybook/react";

import SubjectID from "../SubjectID";

storiesOf("Primitive|text/SubjectDetailSubjectID", module)
  .add("Cause", () => <SubjectID subjectID = {1234567890} />)
  .add("Post", () => <SubjectID subjectID = {1234567890} secondary/>);