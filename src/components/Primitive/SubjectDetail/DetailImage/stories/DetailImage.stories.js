import React from "react";
import { storiesOf } from "@storybook/react";

import DetailImage from "../DetailImage";
import PR from "../../../../../assets/SubjectCard/PuertoRico_VdPR.jpg";

storiesOf("Primitive|Images/SubjectDetailImage", module)
  .add("Standard", () => <DetailImage src = {PR}/>);