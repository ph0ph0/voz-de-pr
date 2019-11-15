import React from "react";
import { render, fireEvent } from "@testing-library/react";

import SignInCard from "../SignInCard";
import { mockApi } from "../API/__mocks__/mockApi";
import { MemoryRouter as Router } from "react-router-dom";

it("renders the tings", () => {
  const { getByTestId, debug } = render(
    <Router>
      <SignInCard api={mockApi} />
    </Router>
  );
  const sG = getByTestId("SideGraphic");

  debug();

  expect(sG).toBeInTheDocument();
});
