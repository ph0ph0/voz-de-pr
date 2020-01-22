import React from "react";
import { storiesOf } from "@storybook/react";

import LeftContent from "../LeftContent";

const subject = {
  id: "b6a1f286-e1ed-446f-bf5c-a732dc804eec",
  createdBy: "42d3a95d-9ce8-403a-ba08-61a3a94a3e78",
  createdAt: "2020-01-22T15:45:22.009Z",
  author: "ph0ph0",
  title: "Another multitap",
  subjectContent: "Another multitap",
  searchField: "anothermultitapanothermultitap",
  timePassedSinceCreation: null,
  numberOfComments: 0,
  votes: 0,
  staticKey: 1,
  type: "post",
  owner: "42d3a95d-9ce8-403a-ba08-61a3a94a3e78",
  pictures: { items: [], nextToken: null },
  comments: { items: [], nextToken: null }
};

storiesOf("DisplayWrappers|SubjectCard/LeftContent", module).add(
  "Standard",
  () => <LeftContent subject={subject} />,
  {
    notes:
      "*PROPS; profileName: string is users profile name, timeAgo: string is time since posted, title: string title of subject, subjectSummary: string is content of subject, numberOfComments: string*"
  }
);
