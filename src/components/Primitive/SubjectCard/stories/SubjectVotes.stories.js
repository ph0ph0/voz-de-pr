import React from "react";
import { storiesOf } from "@storybook/react";

import SubjectVotes from "../SubjectVotes";

storiesOf("Primitive|text/SubjectVotes", module)
  .add("Standard", () => <SubjectVotes>123 Test</SubjectVotes>)
  .add("C", () => <SubjectVotes>178 Votes</SubjectVotes>)
  .add("P", () => <SubjectVotes secondary>178 Votes</SubjectVotes>);