import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SignIn from "../SignIn";
import { MemoryRouter as Router } from "react-router-dom";

beforeEach(() => {
  jest.resetModules();
});

it("renders", () => {
  const { getByTestId } = render(
    <Router>
      <SignIn />
    </Router>
  );
  const sG = getByTestId("SideGraphic");

  expect(sG).toBeInTheDocument();
});

it("Indicates that email must be entered to login", () => {
  const { getByTestId } = render(
    <Router>
      <SignIn />
    </Router>
  );

  // fireEvent.change(getByTestId("EmailInput"), { target: { value: "" } });
  fireEvent.change(getByTestId("PasswordInput"), {
    target: { value: "1234567890" }
  });

  fireEvent.click(getByTestId("SignInButton"));

  const emailEmptyErrorText = getByTestId("EmailEmptyErrorText");
  expect(emailEmptyErrorText).toBeInTheDocument();
});
