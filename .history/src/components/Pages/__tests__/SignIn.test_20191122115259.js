import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SignIn from "../SignIn";
import { MemoryRouter as Router } from "react-router-dom";
import { UserProvider } from "../../../CustomHooks/user";
// import {useUser} from '../../../CustomHooks/user'

beforeEach(() => {
  jest.resetModules();
});

//Allows us to ignore window . log calls
global.log = () => {};

it("renders", () => {
  const { getByTestId } = render(
    <UserProvider>
      <Router>
        <SignIn />
      </Router>
    </UserProvider>
  );
  const emailInput = getByTestId("EmailInput");

  expect(emailInput).toBeInTheDocument();
});

it("Indicates that email must be entered to login", () => {
  const { getByTestId } = render(
    <UserProvider>
      <Router>
        <SignIn />
      </Router>
    </UserProvider>
  );

  fireEvent.change(getByTestId("EmailInput"), { target: { value: "" } });
  fireEvent.change(getByTestId("PasswordInput"), {
    target: { value: "" }
  });

  fireEvent.click(getByTestId("SignInButton"));

  const emailEmptyErrorText = getByTestId("EmailEmptyErrorText");
  const passwordEmptyErrorText = getByTestId("PasswordEmptyErrorText");

  expect(emailEmptyErrorText).toBeInTheDocument();
  expect(passwordEmptyErrorText).toBeNull();
});
