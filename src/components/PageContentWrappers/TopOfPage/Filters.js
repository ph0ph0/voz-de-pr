import React from "react";
import styled from "styled-components";

import {
  Filter,
  FilterRedProfile,
  FilterBlueProfile
} from "components/Primitive/TopOfPage/Filter";
import { useLanguage } from "CustomHooks/useLanguage";

const displayText = {
  en: {
    myCauses: "My Causes",
    myPosts: "My Posts",
    mostVotes: "Most Votes",
    mostComments: "Most Comments",
    all: "All"
  },
  sp: {
    myCauses: "Mis causas",
    myPosts: "Mis publicaciones",
    mostVotes: "Más Votos",
    mostComments: "Más Comentado",
    all: "Todo"
  }
};

const FiltersWrapper = ({
  profileType,
  updateSortOrderState,
  sortOrderState,
  ...props
}) => {
  const { language } = useLanguage();

  //If the filters should be shown on a profile page, then they are slightly different

  if (profileType) {
    return (
      <div {...props}>
        <MyCausesFilter
          onClick={() => updateSortOrderState("myCauses")}
          sortOrderState={sortOrderState}
        >
          {language === "spanish"
            ? displayText.sp.myCauses
            : displayText.en.myCauses}
        </MyCausesFilter>
        <MyPostsFilter
          onClick={() => updateSortOrderState("myPosts")}
          sortOrderState={sortOrderState}
        >
          {language === "spanish"
            ? displayText.sp.myPosts
            : displayText.en.myPosts}
        </MyPostsFilter>
        <MyAllFilter
          onClick={() => updateSortOrderState("all")}
          sortOrderState={sortOrderState}
        >
          {language === "spanish" ? displayText.sp.all : displayText.en.all}
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
        {language === "spanish"
          ? displayText.sp.mostVotes
          : displayText.en.mostVotes}
      </MostVotesFilter>
      <MostCommentsFilter
        onClick={() => updateSortOrderState("mostComments")}
        sortOrderState={sortOrderState}
      >
        {language === "spanish"
          ? displayText.sp.mostComments
          : displayText.en.mostComments}
      </MostCommentsFilter>
      <ResetFilter
        onClick={() => updateSortOrderState("all")}
        sortOrderState={sortOrderState}
      >
        {language === "spanish" ? displayText.sp.all : displayText.en.all}
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
