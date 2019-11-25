import { SubjectsMixed } from "../../../../Constants/MockSubjectsData";

import { fetchSubject } from "../../SubjectDetail";

global.log = () => {};

it("fetches subject", () => {
  expect(fetchSubject("1ABC")).toEqual(SubjectsMixed[0]);
});