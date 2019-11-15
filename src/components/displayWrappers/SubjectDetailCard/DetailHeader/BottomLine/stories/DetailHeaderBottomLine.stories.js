import React from "react";
import { storiesOf } from "@storybook/react";

import DetailHeaderBottomLine from "../DetailHeaderBottomLine";

storiesOf("DisplayWrappers|SubjectDetail/DetailHeader/DetailHeaderBottomLine", module)
  .add("Cause", () => <DetailHeaderBottomLine votesOnSubject = {5678}/>)
  .add("Post", () => <DetailHeaderBottomLine secondary votesOnSubject = {786}/>);