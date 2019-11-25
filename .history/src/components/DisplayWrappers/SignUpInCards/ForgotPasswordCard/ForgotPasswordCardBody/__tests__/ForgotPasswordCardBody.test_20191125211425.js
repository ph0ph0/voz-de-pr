import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElementToBeRemoved
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ForgotPasswordCardBody from "../ForgotPasswordCardBody";
import { MemoryRouter as Router } from "react-router-dom";
import { UserProvider } from "../../../../../../CustomHooks/user";
import { ThemeProvider } from "styled-components";
import theme from "../../../../../../theme/Theme";

import api from "../../API/ForgotPasswordApi";

// const mockAmplify = require("aws-amplify")

// jest.mock("aws-amplify", () => ({
//   Auth: { forgotPassword: () => ({ data: {} }) }
// }));

jest.mock("../../../../../../CustomHooks/user", () => ({
  useUser: () => ({
    error: "Test Error",
    loading: false,
    forgotPassword: () => {
      return Promise.resolve({ data: {} });
    },
    submitCodeAndNewPassword: () => ({ data: {} })
  })
}));

afterEach(cleanup);

const state = {
  emailValue: "",
  firstPasswordValue: "",
  secondPasswordValue: "",
  codeValue: "",
  content: "email",
  passwordsMatch: null
};

const useApiMock = (api, defaultValue) => {
  let state = defaultValue;
  let setState = updater => {
    if (typeof updater === "function") {
      state = updater(state);
    } else {
      state = updater;
    }
    ref.api = api({ state, setState });
  };
  let ref = {
    api: api({ state, setState })
  };
  return ref;
};

const mockApi = useApiMock(api, state);

//Allows us to ignore window . log calls
global.log = () => {};

it("renders email content initially", () => {
  const { getByTestId, debug } = render(
    <ThemeProvider theme={theme}>
      <Router>
        <ForgotPasswordCardBody api={mockApi.api} />
      </Router>
    </ThemeProvider>
  );
  const emailInput = getByTestId("fpwEmailInput");
  const submitButton = getByTestId("fpwSubmitButton");

  // debug();

  expect(emailInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

it("Changes state", async () => {
  const { getByTestId, debug, waitForElement } = render(
    <ThemeProvider theme={theme}>
      <Router>
        <ForgotPasswordCardBody api={mockApi.api} />
      </Router>
    </ThemeProvider>
  );

  const emailInput = getByTestId("fpwEmailInput");
  const submitButton = getByTestId("fpwSubmitButton");
  fireEvent.click(submitButton);

  mockApi.api.submit();

  debug();

  // await waitForElementToBeRemoved(() => emailInput);
  await waitForElement(getByTestId("CodeInput"));

  debug();
});
