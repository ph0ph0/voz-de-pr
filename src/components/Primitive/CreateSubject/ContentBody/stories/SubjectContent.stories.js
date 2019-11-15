import React from "react";
import { storiesOf } from "@storybook/react";

import SubjectContent from "../SubjectContent";

import { mockApi } from "../../../../DisplayWrappers/CreateSubject/API/__mocks__/mockApi";

storiesOf("Primitive|text/SubjectContent", module)
  .add("Standard", () => <SubjectContent api = {mockApi}/>);