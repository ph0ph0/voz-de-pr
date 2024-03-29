import React from "react";
import styled from "styled-components";

import { Helmet } from "react-helmet";

import FeedPageContent from "../PageContentWrappers/FeedPages/FeedPageContent";

const Page = ({ ...props }) => {
  return (
    <div {...props}>
      <FeedPageContent pageType={"Home"} profileType={false} />
    </div>
  );
};

const MainFeed = styled(Page)`
  /* position: static; */

  display: flex;
  flex-direction: row;

  justify-content: center;

  /* Needed to make the SidePanel keep its proper height */
  align-items: flex-start;
`;

export default MainFeed;
