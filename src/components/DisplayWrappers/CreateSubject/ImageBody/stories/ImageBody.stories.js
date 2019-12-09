import React from "react";
import { storiesOf } from "@storybook/react";

import ImageBody from "../ImageBody";

import { mockApi } from "../../API/__mocks__/mockApi";

storiesOf("DisplayWrappers|CreateSubject/ImageBody/ImageBody", module)
  .add("Standard", () => <ImageBody api = {mockApi}/>);