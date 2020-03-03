import React from "react";
import { storiesOf } from "@storybook/react";

import RightContent from "../RightContent";
import PR from "../../../../../assets/SubjectCard/PuertoRico_VdPR.jpg";

//PROPS: numberOfVotes, secondary, src

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

storiesOf("DisplayWrappers|SubjectCard/RightContent", module)
  .add("Standard", () => <RightContent subject={subject} secondary={false} />, {
    notes:
      "*PROPS; numberOfVotes: string ie '147 Votes', secondary: bool, src: image source*, the right content of the subject card"
  })
  .add("C", () => <RightContent subject={subject} secondary={false} />, {
    notes: "*PROPS; numberOfVotes, secondary, src*"
  })
  .add("P", () => <RightContent subject={subject} secondary={true} />);
