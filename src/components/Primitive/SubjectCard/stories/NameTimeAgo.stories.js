import React from "react";
import NameTimeAgo from "../NameTimeAgo";

import { storiesOf } from "@storybook/react";

storiesOf("Primitive|Text/NameTimeAgo", module)
  .add("Standard", () => <NameTimeAgo isTimeAgo = {false}>Test</NameTimeAgo>, {
    notes : "*PROPS; isTimeAgo: bool defines if it is eg '1 hour ago' and if so, prefix with a bullet point*"
  })
  .add("Name", () => <NameTimeAgo isTimeAgo = {false}>James Montgommery Wheeler McGuiness</NameTimeAgo>)
  .add("TimeAgo", () => <NameTimeAgo isTimeAgo = {true}>1 Hour Ago</NameTimeAgo>);