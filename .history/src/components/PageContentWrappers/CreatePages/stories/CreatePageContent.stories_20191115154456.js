import React from "react";
import { storiesOf } from "@storybook/react";

import CreatePageContent from "../CreatePageContent";

storiesOf("PageContentWrappers/CreatePages/CreatePageContent", module)
  .add("Cause", () => <CreatePageContent />)
  .add("Post", () => <CreatePageContent />);