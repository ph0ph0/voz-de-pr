import React from "react";
import { render, fireEvent } from "@testing-library/react";

import SignInCard from "../SignInCard";
import { mockApi } from "../API/__mocks__/mockApi";

it("renders the tings", () => {
  const { getByTestId, debug } = render(<SignInCard api={mockApi} />);
  const sG = getByTestId("SideGraphic");

  debug();

  expect(sG).toBeInTheDocument();
});
