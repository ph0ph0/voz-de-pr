import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  flushPromises,
  waitForElementToBeRemoved,
  wait,
  getByText
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import FeedMainPageContent from "../../FeedMainPageContent";
import { MemoryRouter as Router } from "react-router-dom";
import { UserProvider } from "CustomHooks/user";
import { ThemeProvider } from "styled-components";
import theme from "theme/Theme";

jest.mock("CustomHooks/user", () => ({
  useUser: () => ({
    error: "Test Error",
    loading: false,
    forgotPassword: () => {
      return "";
    },
    submitCodeAndNewPassword: () => ({ data: {} }),
    user: { id: "testId" }
  })
}));

jest.mock("CustomHooks/useSubject", () => ({
  useSubject: () => ({
    getSubjectPicture: () => "",
    listAllSubjectsOrderedByCreatedAt: () => {
      return [{ id: "", title: "Hey" }];
    },
    listAllSubjectsOrderedByVotes: () => {
      return [{ id: "", title: "Hey" }];
    },
    listAllSubjectsOrderedByComments: () => {
      return [{ id: "", title: "Hey" }];
    }
  })
}));

jest.mock("CustomHooks/useSearch", () => ({
  useSearch: () => ({
    updateSearchText: () => {},
    searchBarText: "",
    searchTerm: "",
    shouldSearch: false,
    updateShouldSearch: () => {}
  })
}));

afterEach(cleanup);

global.log = () => {};

it("does shit", async () => {
  const { getByTestId, getByText, debug } = render(
    <ThemeProvider theme={theme}>
      <Router>
        <FeedMainPageContent />
      </Router>
    </ThemeProvider>
  );
  await wait();
  const title = await getByText("Hey");
  expect(title).toBeInTheDocument();
});
