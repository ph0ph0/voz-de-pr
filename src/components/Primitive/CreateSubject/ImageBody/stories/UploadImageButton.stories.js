import React from "react";
import { storiesOf } from "@storybook/react";

import UploadImageButton from "../UploadImageButton";

storiesOf("Primitive|Buttons/UploadImageButton", module)
  .add("Cause", () => <UploadImageButton>Upload Image</UploadImageButton>)
  .add("Profile", () => <UploadImageButton secondary >Upload Image</UploadImageButton>);