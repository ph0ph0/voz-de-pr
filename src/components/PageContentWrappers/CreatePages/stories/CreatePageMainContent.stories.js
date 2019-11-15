import React from "react";
import { storiesOf } from "@storybook/react";

import CreatePageMainContent from "../CreatePageMainContent";

storiesOf("PageContentWrappers|CreatePages/CreatePageMainContent", module)
  .add("Cause", () => <CreatePageMainContent pageTitle = {"Create Cause"}/>)
  .add("Post", () => <CreatePageMainContent pageTitle = {"Create Post"}/>);