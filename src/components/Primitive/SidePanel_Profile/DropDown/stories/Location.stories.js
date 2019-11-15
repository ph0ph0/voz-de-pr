import React from "react";
import { storiesOf } from "@storybook/react";

import Location from "../Location";

storiesOf("Primitive|Lists/ListItems/Location", module)
  .add("Standard", () => <Location />, {
    notes: "*PROPS; children: the list text that will be displayed* NOTE that it looks shit as it is the ul that does the styling"
  })
  .add("Tester", () => <Location>London</Location>);