import React from "react";
import { storiesOf } from "@storybook/react";

import { Filter, FilterRedProfile, FilterBlueProfile } from "../Filter";

storiesOf("Primitive|Buttons/Filter", module)
  .add("Standard", () => <Filter>Most Comments</Filter>, {
    notes: "These are the buttons that sit in the top of the page and allow the user to filter the feed."
  })
  .add("FilterRedProfile", () => <FilterRedProfile>My Causes</FilterRedProfile>)
  .add("FilterBlueProfile", () => <FilterBlueProfile>My Causes</FilterBlueProfile>);