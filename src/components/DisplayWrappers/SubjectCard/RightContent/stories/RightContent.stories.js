import React from "react";
import { storiesOf } from "@storybook/react";

import RightContent from "../RightContent";
import PR from "../../../../../assets/SubjectCard/PuertoRico_VdPR.jpg";

//PROPS: numberOfVotes, secondary, src

const pictures = { items: [{ key: "" }] };

storiesOf("DisplayWrappers|SubjectCard/RightContent", module)
  .add(
    "Standard",
    () => (
      <RightContent numberOfVotes={147} secondary={false} pictures={pictures} />
    ),
    {
      notes:
        "*PROPS; numberOfVotes: string ie '147 Votes', secondary: bool, src: image source*, the right content of the subject card"
    }
  )
  .add(
    "C",
    () => (
      <RightContent
        numberOfVotes={147}
        secondary={false}
        src={PR}
        pictures={pictures}
      />
    ),
    {
      notes: "*PROPS; numberOfVotes, secondary, src*"
    }
  )
  .add("P", () => (
    <RightContent
      numberOfVotes={147}
      secondary={true}
      src={PR}
      pictures={pictures}
    />
  ));
