import React from "react";
import styled from "styled-components";

import {
  Filter,
  FilterRedProfile,
  FilterBlueProfile
} from "components/Primitive/TopOfPage/Filter";

const FiltersWrapper = ({
  profileType,
  updateSortOrderState,
  sortOrderState,
  ...props
}) => {
  //If the filters should be shown on a profile page, then they are slightly different

  if (profileType) {
    return (
      <div {...props}>
        <MyCausesFilter
          onClick={() => updateSortOrderState("myCauses")}
          sortOrderState={sortOrderState}
        >
          My Causes
        </MyCausesFilter>
        <MyPostsFilter
          onClick={() => updateSortOrderState("myPosts")}
          sortOrderState={sortOrderState}
        >
          My Posts
        </MyPostsFilter>
        <MyAllFilter
          onClick={() => updateSortOrderState("all")}
          sortOrderState={sortOrderState}
        >
          All
        </MyAllFilter>
      </div>
    );
  }

  return (
    <div {...props}>
      <MostVotesFilter
        onClick={() => updateSortOrderState("mostVotes")}
        sortOrderState={sortOrderState}
      >
        Más Votos
      </MostVotesFilter>
      <MostCommentsFilter
        onClick={() => updateSortOrderState("mostComments")}
        sortOrderState={sortOrderState}
      >
        Más Comentado
      </MostCommentsFilter>
      <ResetFilter
        onClick={() => updateSortOrderState("all")}
        sortOrderState={sortOrderState}
      >
        Todo
      </ResetFilter>
    </div>
  );
};

const MyCausesFilter = styled(FilterRedProfile)`
  color: ${props =>
    props.sortOrderState === "myCauses"
      ? props.theme.primaryColour
      : "#6e6f70"};
`;

const MyAllFilter = styled(FilterRedProfile)`
  color: ${props =>
    props.sortOrderState === "all" ? props.theme.primaryColour : "#6e6f70"};
`;

const MyPostsFilter = styled(FilterRedProfile)`
  color: ${props =>
    props.sortOrderState === "myPosts"
      ? props.theme.secondaryColour
      : "#6e6f70"};
`;

const MostVotesFilter = styled(FilterRedProfile)`
  color: ${props =>
    props.sortOrderState === "mostVotes"
      ? props.theme.secondaryColour
      : "#6e6f70"};

  :hover {
    color: "#1B4EA0";
  }
`;

const MostCommentsFilter = styled(FilterRedProfile)`
  color: ${props =>
    props.sortOrderState === "mostComments"
      ? props.theme.primaryColour
      : "#6e6f70"};

  :hover {
    color: "#EC220D";
  }
`;

const ResetFilter = styled(FilterRedProfile)`
  color: ${props =>
    props.sortOrderState === "all" ? props.theme.secondaryColour : "#6e6f70"};

  :hover {
    color: "#1B4EA0";
  }
`;

const Filters = styled(FiltersWrapper)`
  /* border: 1px solid teal; */
  height: 19px;
  display: flex;

  margin-left: auto;
`;

export default Filters;
