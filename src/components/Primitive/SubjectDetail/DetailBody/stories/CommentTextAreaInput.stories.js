import React from "react";
import { storiesOf } from "@storybook/react";

import CommentTextAreaInput from "../CommentTextAreaInput";

storiesOf("Primitive/text/SubjectDetailCommentTextAreaInput", module)
  .add("Standard", () => <CommentTextAreaInput />);