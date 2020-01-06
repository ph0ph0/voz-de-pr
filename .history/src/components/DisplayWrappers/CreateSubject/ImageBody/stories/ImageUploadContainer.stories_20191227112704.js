import React from "react";
import { storiesOf } from "@storybook/react";

import ImageUploadContainer from "../ImageUploadContainer";
import mockApi from "../../API/__mocks__/mockApi";

storiesOf(
  '"DisplayWrappers|CreateSubject/ImageBody/ImageUploadContainer',
  module
).add("Standard", () => <ImageUploadContainer />);