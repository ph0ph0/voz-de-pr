import React from "react";
import { storiesOf } from "@storybook/react";

import SubjectTitle from "../SubjectTitle";

storiesOf("Primitive|text/SubjectTitle", module)
  .add("Standard", () => <SubjectTitle>Test</SubjectTitle>)
  .add("Title", () => <SubjectTitle>Puerto Rico - Cherish Its Natural Wonders</SubjectTitle>)
  .add("Long Title", () => <SubjectTitle>Puerto Rico - Cherish Its Natural Wonders and Come and Visit Us to See How We Do Things Differently. Our nature is amazing and our people are full of life</SubjectTitle>);