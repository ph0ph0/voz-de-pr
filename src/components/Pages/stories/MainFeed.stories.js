import React from "react";
import { storiesOf } from "@storybook/react";

import MainPage from "../MainFeed";

global.log = () => {};

storiesOf("Pages|MainFeed/MainFeed", module)
  .add("Standard", () => <MainPage />);