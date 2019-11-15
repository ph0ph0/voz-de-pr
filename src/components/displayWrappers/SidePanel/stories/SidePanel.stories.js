import React from "react";
import { storiesOf } from "@storybook/react";

import SidePanel from "../SidePanel";

storiesOf("DisplayWrappers|SidePanel/SidePanel", module)
  .add("Standard", () => <SidePanel />, {
    notes: "*PROPS; type: determines which type of SidePanel should be displayed* NOTE that there is a fifth type that can be shown. This is SidePanel_Profile, and was created seperately to the four below as it has extra complexity and hence needs to be broken out."
  })
  .add("CauseOnly", () => <SidePanel type = {"CauseOnly"} />)
  .add("PostOnly", () => <SidePanel type = {"PostOnly"} />)
  .add("CauseInfo", () => <SidePanel type = {"CauseInfo"} />)
  .add("PostInfo", () => <SidePanel type = {"PostInfo"} />);