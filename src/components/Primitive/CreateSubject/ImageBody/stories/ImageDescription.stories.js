import React from "react";
import { storiesOf } from "@storybook/react";

import ImageDescription from "../ImageDescription";

import { mockApi } from "../../../../DisplayWrappers/CreateSubject/API/__mocks__/mockApi";

storiesOf("Primitive|text/ImageDescription", module)
  .add("Standard", () => <ImageDescription api = {mockApi}/>);