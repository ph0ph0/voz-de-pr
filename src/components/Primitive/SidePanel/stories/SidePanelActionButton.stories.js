import React from "react";
import { storiesOf } from "@storybook/react";

import SidePanelActionButton from "../SidePanelActionButton";

storiesOf("Primitive|Buttons/SidePanelActionButton", module)
  .add("Cause", () => <SidePanelActionButton />)
  .add("Post", () => <SidePanelActionButton secondary/>);