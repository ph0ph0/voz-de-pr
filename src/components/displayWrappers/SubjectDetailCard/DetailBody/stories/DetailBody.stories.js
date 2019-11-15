import React from "react";
import { storiesOf } from "@storybook/react";

import DetailBody from "../DetailBody";

const text = `
In its mission to protect functional ecosystems in the islands of Puerto Rico and to secure the essential services they provide, the Conservation Trust of Puerto Rico has focused its land acquisition and ecosystem management strategies on a regional approach, based on Puerto Rico’s main watersheds. As such, 5 distinct Regions have been established and labeled according to their cardinal direction. The Conservation Trust’s natural protected areas are managed and supervised according to this regional network. 

Tours through the nurseries in Río Piedras and Barranquitas are interesting and educational, while emphasizing that each and every person can have a positive impact on the environment, to the benefit of current and future generations of Puerto Ricans.

With your donation, you support Para la Naturaleza's efforts towards environmental conservation and historical preservation as well as promote the rehabilitation of our habitats. 

For your convenience, you can also make your donation by calling (787) 722-5834 or sending a check to Para la Naturaleza, PO Box 9023554, San Juan, PR 00902-3554.
`;

storiesOf("DisplayWrappers/SubjectDetail/DetailBody/DetailBody", module)
  .add("Cause", () => <DetailBody subjectContent = {text}/>)
  .add("Post", () => <DetailBody subjectContent = {text} secondary/>);