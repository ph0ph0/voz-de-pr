import React from "react";
import { storiesOf } from "@storybook/react";

import PageTitle from "../PageTitle";

storiesOf("Primitive|text/PageTitle", module)
  .add("Standard", () => <PageTitle>Home Feed</PageTitle>);

