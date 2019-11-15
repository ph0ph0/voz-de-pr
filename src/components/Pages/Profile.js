import React from "react";
import styled from "styled-components";

import FeedPageContent from "../PageContentWrappers/FeedPages/FeedPageContent";

const Page = (props) => {
  return (
    <div {...props}>
      <FeedPageContent pageType = {"Profile"} profileType = {true}/>
    </div>
  );
};

const Profile = styled(Page)`
    margin-top: "200px";
`;

export default Profile;