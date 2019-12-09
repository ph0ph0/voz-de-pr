import React from "react";
import { render, fireEvent, cleanup, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ForgotPassword from "../ForgotPassword";
import { MemoryRouter as Router } from "react-router-dom";
import { UserProvider } from "../../../CustomHooks/user";
import { ThemeProvider } from "styled-components";
import theme from "../../../theme/Theme";
import { act } from "react-dom/test-utils";

jest.mock("../../../CustomHooks/user", () => ({
  useUser: () => ({
    error: null,
    loading: false,
    forgotPassword: () => {},
    submitCodeAndNewPassword: async () => ({ data: {} })
  })
}));

afterEach(cleanup);

//Allows us to ignore window . log calls
global.log = () => {};

//Used to ensure that any test code that depends on async code in the Api is ran on the following event loop
function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}

// it("renders email content initially", () => {
//   const { getByTestId } = render(
//     // <UserProvider>
//     <ThemeProvider theme={theme}>
//       <Router>
//         <ForgotPassword />
//       </Router>
//     </ThemeProvider>
//     // </UserProvider>
//   );
//   const emailInput = getByTestId("fpwEmailInput");
//   const submitButton = getByTestId("fpwSubmitButton");

//   expect(emailInput).toBeInTheDocument();
//   expect(submitButton).toBeInTheDocument();
// });

describe("Forgot password flow", () => {
  it("changes state/content from email to code when submit is first clicked, then finishes when passwords match and submit clicked again", async () => {
    const { getByTestId, debug } = render(
      <ThemeProvider theme={theme}>
        <Router>
          <ForgotPassword />
        </Router>
      </ThemeProvider>
    );

    const submitButton = getByTestId("fpwSubmitButton");
    expect(submitButton).toBeInTheDocument();

    const emailInput = getByTestId("fpwEmailInput");

    fireEvent.change(emailInput, {
      target: { value: "testemail@testemail.com" }
    });

    fireEvent.click(submitButton);

    //Wait for the async code to resolve.
    await flushPromises();

    const codeInput = getByTestId("CodeInput");
    expect(codeInput).toBeInTheDocument();

    const firstPasswordInput = getByTestId("FirstPasswordInput");
    expect(firstPasswordInput).toBeInTheDocument();

    const secondPasswordInput = getByTestId("SecondPasswordInput");
    expect(secondPasswordInput).toBeInTheDocument();
  });
});
