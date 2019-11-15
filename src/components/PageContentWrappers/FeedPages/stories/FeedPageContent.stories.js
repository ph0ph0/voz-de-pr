import React from "react";
import { storiesOf } from "@storybook/react";

import FeedPageContent from "../FeedPageContent";

storiesOf("PageContentWrappers|FeedPages/FeedPageContent", module)
  .add("Standard", () => <FeedPageContent pageTitle = {"Test"} sidePanelType = {"Standard"} profileType = {false}/>);