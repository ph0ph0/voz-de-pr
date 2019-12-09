import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  wait,
  getByText,
  waitForElementToBeRemoved
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SignUp from "../SignUp";
import { MemoryRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "theme/Theme";

jest.mock("CustomHooks/user", () => ({
  useUser: () => ({
    error: null,
    loading: false,
    signUp: () => {}
  })
}));

afterEach(cleanup);

//Allows us to ignore window . log calls
global.log = () => {};

describe("Presenting input errors to the user", () => {
  it("Shows errors when fields are empty", () => {
    const { getByTestId, getByText, debug } = render(
      <ThemeProvider theme={theme}>
        <Router>
          <SignUp />
        </Router>
      </ThemeProvider>
    );
    const submitButton = getByTestId("submitButton");
    expect(submitButton).toBeInTheDocument();

    fireEvent.click(submitButton);

    const firstNameMissingError = getByText("Please provide a first name");
    const lastNameMissingError = getByText("Please provide a last name");
    const usernameMissingError = getByText("Please provide a username");
    const emailMissingError = getByText("Please provide a valid email");
    const locationMissingError = getByText(
      "Please select a location from the dropdown"
    );
    const passwordMissingError = getByText("Please provide a password");
    const avatarMissingError = getByText("Please select an avatar");

    expect(firstNameMissingError).toBeInTheDocument();
    expect(lastNameMissingError).toBeInTheDocument();
    expect(usernameMissingError).toBeInTheDocument();
    expect(emailMissingError).toBeInTheDocument();
    expect(locationMissingError).toBeInTheDocument();
    expect(passwordMissingError).toBeInTheDocument();
    expect(avatarMissingError).toBeInTheDocument();
  });
});

describe("Selectable inputs", () => {
  it("Dropdown opens and closes, and User can select a location", () => {
    const { getByTestId, getByText, debug } = render(
      <ThemeProvider theme={theme}>
        <Router>
          <SignUp />
        </Router>
      </ThemeProvider>
    );

    const submitButton = getByText("SIGN UP");
    expect(submitButton).toBeInTheDocument();

    const Info = getByText("Select an Avatar");
    expect(Info).toBeInTheDocument();

    const InlineContent = getByTestId("InlineContent");
    expect(InlineContent).toBeInTheDocument();

    fireEvent.click(InlineContent);

    const ListOfLocations = getByTestId("ListOfLocations");
    expect(ListOfLocations).toBeInTheDocument();

    const SelectedLocation = getByText("Rincon");
    expect(SelectedLocation).toBeInTheDocument();

    fireEvent.click(SelectedLocation);

    expect(ListOfLocations).not.toBeInTheDocument();
  });

  it("Avatars can be selected", () => {
    const { getByTestId, getByText, getAllByTestId, debug } = render(
      <ThemeProvider theme={theme}>
        <Router>
          <SignUp />
        </Router>
      </ThemeProvider>
    );

    const submitButton = getByText("SIGN UP");
    expect(submitButton).toBeInTheDocument();

    const Info = getByText("Select an Avatar");
    expect(Info).toBeInTheDocument();

    const AvatarImage = getAllByTestId("AvatarSignUp")[0];
    const AvatarStyle = window.getComputedStyle(AvatarImage);
    expect(AvatarStyle.backgroundColor).toBe("EC220D");
    debug();
  });
});

// describe("Navigation to ConfirmSignUp after successful input", () => {
//   const { getByTestId, getByText, debug } = render(
//     <ThemeProvider theme={theme}>
//       <Router>
//         <SignUp />
//       </Router>
//     </ThemeProvider>
//   );

//   const submitButton = getByTestId("submitButton");
//   expect(submitButton).toBeInTheDocument();

//   // const FirstNameInput = getByTestId("");
// });
