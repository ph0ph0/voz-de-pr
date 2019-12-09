import React from "react";
import { storiesOf } from "@storybook/react";

import SubjectInfoWrapper from "../SubjectinfoWrapper";

storiesOf("DisplayWrappers|SubjectCard/SubjectInfoWrapper", module)
  .add("Standard", () => <SubjectInfoWrapper numberOfVotes = {"TEST"} />)
  .add("C", () => <SubjectInfoWrapper numberOfVotes = {"193 Votes"} />)
  .add("P", () => <SubjectInfoWrapper numberOfVotes = {"1000000 Votes"} secondary />, {
    notes: "*PROPS; numberOfVotes: string ie '147 Votes', secondary:  determines the colour.* Wraps the Votes and Post/Cause above the image on the subject card. Takes props numberOfVotes, which is a string ie '147 Votes' and secondary, which determines the colour"
  });