import React from "react";
import styled from "styled-components";

import {
  Filter,
  FilterRedProfile,
  FilterBlueProfile
} from "../../Primitive/TopOfPage/Filter";

const FiltersWrapper = ({ profileType, ...props }) => {
  //If the filters should be shown on a profile page, then they are slightly different

  if (profileType) {
    return (
      <div {...props}>
        <FilterRedProfile>My Causes</FilterRedProfile>
        <FilterBlueProfile>My Posts</FilterBlueProfile>
        <FilterRedProfile>All</FilterRedProfile>
      </div>
    );
  }

  return (
    <div {...props}>
      <Filter>Most Votes</Filter>
      <Filter>Most Comments</Filter>
      <Filter>Reset</Filter>
    </div>
  );
};

const Filters = styled(FiltersWrapper)`
  /* border: 1px solid teal; */
  height: 19px;
  display: flex;

  margin-left: auto;
`;

export default Filters;
