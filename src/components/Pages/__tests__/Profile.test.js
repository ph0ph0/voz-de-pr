import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Profile from "../Profile";
import { MemoryRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "theme/Theme";
import { act } from "react-dom/test-utils";

afterEach(cleanup);

//Allows us to ignore window . log calls
global.log = () => {};

jest.mock("CustomHooks/user", () => ({
  useUser: () => ({
    error: null,
    loading: false,
    forgotPassword: () => {},
    submitCodeAndNewPassword: () => {},
    user: "testUser",
    updateUserLocationAndAvatar: () => {},
    getUserAvatar: () => ""
  })
}));

//Jest can't reference out of scope variables, and so the subject has to be hardcoded
jest.mock("CustomHooks/useSubject", () => ({
  useSubject: () => ({
    listAllSubjectsOrderedByCreatedAt: () => {
      return [
        {
          id: "9ABC",
          createdBy: "USERID1",
          createdAt: "",
          timePassed: "1 hour ago",
          author: "James Wheeler Montgommery McGuiness",
          timeAgo: "1 hour ago",
          title: "Puerto Rico - Cherish Its Natural Wonders",
          subjectContent:
            "In its mission to protect functional ecosystems in the islands of Puerto Rico and to secure the essential services they provide, the Conservation Trust of Puerto Rico has focused its land acquisition and ecosystem management strategies on a regional approach, based on Puerto Rico’s main watersheds. As such, 5 distinct Regions have been established and labeled according to their cardinal direction. The Conservation Trust’s natural protected areas are managed and supervised according to this regional network. Tours through the nurseries in Río Piedras and Barranquitas are interesting and educational, while emphasizing that each and every person can have a positive impact on the environment, to the benefit of current and future generations of Puerto Ricans. With your donation, you support Para la Naturaleza's efforts towards environmental conservation and historical preservation as well as promote the rehabilitation of our habitats. For your convenience, you can also make your donation by calling (787) 722-5834 or sending a check to Para la Naturaleza, PO Box 9023554, San Juan, PR 00902-3554.",
          subjectImage: "PR",
          comments: ["comments"],
          votes: 147,
          type: "cause",
          pictures: { items: [{ key: "someURL" }] }
        }
      ];
    },
    listAllSubjectsOrderedByVotes: () => {
      return [
        {
          id: "9ABC",
          createdBy: "USERID1",
          createdAt: "",
          timePassed: "1 hour ago",
          author: "James Wheeler Montgommery McGuiness",
          timeAgo: "1 hour ago",
          title: "Puerto Rico - Cherish Its Natural Wonders",
          subjectContent:
            "In its mission to protect functional ecosystems in the islands of Puerto Rico and to secure the essential services they provide, the Conservation Trust of Puerto Rico has focused its land acquisition and ecosystem management strategies on a regional approach, based on Puerto Rico’s main watersheds. As such, 5 distinct Regions have been established and labeled according to their cardinal direction. The Conservation Trust’s natural protected areas are managed and supervised according to this regional network. Tours through the nurseries in Río Piedras and Barranquitas are interesting and educational, while emphasizing that each and every person can have a positive impact on the environment, to the benefit of current and future generations of Puerto Ricans. With your donation, you support Para la Naturaleza's efforts towards environmental conservation and historical preservation as well as promote the rehabilitation of our habitats. For your convenience, you can also make your donation by calling (787) 722-5834 or sending a check to Para la Naturaleza, PO Box 9023554, San Juan, PR 00902-3554.",
          subjectImage: "PR",
          comments: ["comments"],
          votes: 147,
          type: "cause",
          pictures: { items: [{ key: "someURL" }] }
        }
      ];
    },
    listAllSubjectsOrderedByComments: () => {
      return [
        {
          id: "9ABC",
          createdBy: "USERID1",
          createdAt: "",
          timePassed: "1 hour ago",
          author: "James Wheeler Montgommery McGuiness",
          timeAgo: "1 hour ago",
          title: "Puerto Rico - Cherish Its Natural Wonders",
          subjectContent:
            "In its mission to protect functional ecosystems in the islands of Puerto Rico and to secure the essential services they provide, the Conservation Trust of Puerto Rico has focused its land acquisition and ecosystem management strategies on a regional approach, based on Puerto Rico’s main watersheds. As such, 5 distinct Regions have been established and labeled according to their cardinal direction. The Conservation Trust’s natural protected areas are managed and supervised according to this regional network. Tours through the nurseries in Río Piedras and Barranquitas are interesting and educational, while emphasizing that each and every person can have a positive impact on the environment, to the benefit of current and future generations of Puerto Ricans. With your donation, you support Para la Naturaleza's efforts towards environmental conservation and historical preservation as well as promote the rehabilitation of our habitats. For your convenience, you can also make your donation by calling (787) 722-5834 or sending a check to Para la Naturaleza, PO Box 9023554, San Juan, PR 00902-3554.",
          subjectImage: "PR",
          comments: ["comments"],
          votes: 147,
          type: "cause",
          pictures: { items: [{ key: "someURL" }] }
        }
      ];
    },
    loading: false
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

describe("When clicking on the dropdown (InlineContent component)", () => {
  it("if closed, it opens, if open, it closes", async () => {
    const { getByTestId, getByText, debug } = render(
      <ThemeProvider theme={theme}>
        <Router>
          <Profile />
        </Router>
      </ThemeProvider>
    );
    const submitButton = getByText("Change");
    expect(submitButton).toBeInTheDocument();

    const Info = getByText("Select A New Avatar");
    expect(Info).toBeInTheDocument();

    const InlineContent = getByTestId("InlineContent");
    expect(InlineContent).toBeInTheDocument();

    fireEvent.click(InlineContent);

    const ListOfLocations = getByTestId("ListOfLocations");
    expect(ListOfLocations).toBeInTheDocument();

    const selectedLocation = getByText("Adjuntas");

    fireEvent.click(selectedLocation);

    expect(ListOfLocations).not.toBeInTheDocument();
  });
});
