import React, { useEffect } from "react";
import styled from "styled-components";

import FeedPageContent from "../PageContentWrappers/FeedPages/FeedPageContent";

import { useSubject } from "CustomHooks/useSubject";

const Page = ({ ...props }) => {
  const { listAllSubjects } = useSubject();

  useEffect(() => {
    (async function getAllSubjects() {
      await listAllSubjects();
    })();
  }, []);

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
