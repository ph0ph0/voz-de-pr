import React from "react";
import { render, fireEvent } from "@testing-library/react";

import SignInCard from "../SignInCard";

it("renders the tings", () => {
  const { getByTestId, debug } = render(<SignInCard />);
  const sG = getByTestId("SideGraphic");

  debug();

  expect(sG).toBeInTheDocument();
});
