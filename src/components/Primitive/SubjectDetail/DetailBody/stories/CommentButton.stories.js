import React from "react";
import { storiesOf } from "@storybook/react";

import CommentButton from "../CommentButton";

storiesOf("Primitive/Buttons/CommentButton", module)
  .add("Cause", () => <CommentButton />)
  .add("Post", () => <CommentButton secondary/>);