import React from "react";
import { storiesOf } from "@storybook/react";

import SubjectCard from "../SubjectCard";
import PR from "../../../../assets/SubjectCard/PuertoRico_VdPR.jpg";

const pictures = { items: [{ key: "" }] };
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

storiesOf("DisplayWrappers|SubjectCard/SubjectCard", module)
  .add("C", () => <SubjectCard subject={subject} secondary={false} />, {
    notes:
      "*PROPS: profileName, timeAgo, title, subjectSummary, numberOfComments, numberOfVotes, secondary, src,* This is the reusable SubjectCard for MainFeed, Causes and Posts"
  })
  .add("P", () => <SubjectCard subject={subject} secondary={false} />);
