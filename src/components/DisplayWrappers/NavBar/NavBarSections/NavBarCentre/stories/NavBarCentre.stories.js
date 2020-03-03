import React from "react";
import { storiesOf } from "@storybook/react";

import NavBarCentre from "../NavBarCentre";

jest.mock("CustomHooks/useSearch", () => ({
  useSearch: () => ({
    shouldSearch: true
  })
}));

storiesOf("DisplayWrappers|NavBar/NavBarCentre", module)
  .add("Standard", () => <NavBarCentre placeholder={"Search"} />, {
    notes: "Wraps around the SearchBar, for display purposes"
  })
  .add("C&P", () => <NavBarCentre placeholder={"Search Causes and Posts"} />)
  .add("C", () => <NavBarCentre placeholder={"Search Causes"} />)
  .add("P", () => <NavBarCentre placeholder={"Search Posts"} />);
