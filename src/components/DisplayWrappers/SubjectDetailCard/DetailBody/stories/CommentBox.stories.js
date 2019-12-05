import React from "react";
import { storiesOf } from "@storybook/react";

import CommentBox from "../CommentBox";

storiesOf("DisplayWrappers/SubjectDetail/DetailBody/CommentBox", module)
  .add("Cause", () => <CommentBox />)
  .add("Post", () => <CommentBox secondary/>);