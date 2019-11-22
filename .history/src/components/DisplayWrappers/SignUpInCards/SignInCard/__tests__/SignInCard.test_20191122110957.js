import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SignInCard from "../SignInCard";
import { mockApi } from "../API/__mocks__/mockApi";
import { MemoryRouter as Router } from "react-router-dom";

it("renders", () => {
  const { getByTestId } = render(
    <Router>
      <SignInCard api={mockApi} />
    </Router>
  );
  const sG = getByTestId("SideGraphic");

  expect(sG).toBeInTheDocument();
});

it("Indicates that email must be entered to login", () => {
  const { getByTestId } = render(
    <Router>
      <SignInCard api={mockApi} />
    </Router>
  );

  fireEvent.change(getByTestId("EmailInput"), { target: { value: "" } });
  fireEvent.change(getByTestId("PasswordInput"), {
    target: { value: "1234567890" }
  });

  fireEvent.click(getByTestId("SignInButton"));

  const emailEmptyErrorText = getByTestId("EmailEmptyErrorText");
  expect(emailEmptyErrorText).toBeInTheDocument();
});
