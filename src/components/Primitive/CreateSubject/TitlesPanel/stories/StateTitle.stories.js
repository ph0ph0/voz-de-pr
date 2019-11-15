import React from "react";
import { storiesOf } from "@storybook/react";

import StateTitle from "../StateTitle";
import { mockApi } from "../../../../DisplayWrappers/CreateSubject/API/__mocks__/mockApi";

storiesOf("Primitive|text/TitlesPanel", module)
  .add("Cause", () => <StateTitle api = {mockApi}>Edit</StateTitle>)
  .add("Post", () => <StateTitle secondary api = {mockApi}>Edit</StateTitle>);