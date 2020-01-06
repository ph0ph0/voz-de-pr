import React from "react";
import { storiesOf } from "@storybook/react";

import ImageUploadContainer from "../ImageUploadContainer";

storiesOf("\"DisplayWrappers|CreateSubject/ImageBody/ImageUploadContainer", module)
  .add("Standard", () => <ImageUploadContainer />);