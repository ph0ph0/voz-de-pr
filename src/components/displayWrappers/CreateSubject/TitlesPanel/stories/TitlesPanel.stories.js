import React from "react";
import { storiesOf } from "@storybook/react";

import TitlesPanel from "../TitlesPanel";
import { mockApi } from "../../API/__mocks__/mockApi";

storiesOf("DisplayWrappers/CreateSubject/TitlesPanel/TitlesPanel", module)
  .add("Standard", () => <TitlesPanel api = {mockApi}/>);