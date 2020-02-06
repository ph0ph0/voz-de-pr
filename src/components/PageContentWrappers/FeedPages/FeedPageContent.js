//This component encapsulates everything that is displayed below the nav bar ie the main page content and the sidebar

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import MainPageContent from "./FeedMainPageContent";
import SidePanel from "components/DisplayWrappers/SidePanel/SidePanel";
import SidePanelProfile from "components/DisplayWrappers/SidePanel_Profile/SidePanel_Profile";

const PageContentWrapper = ({ pageType, profileType, ...props }) => {
  switch (pageType) {
    case "Home":
      return (
        <div {...props}>
          <MainPageContent
            pageTitle={"Causas y Publicaciones"}
            profileType={profileType}
            pageFilter={"Mixed"}
          />
          <SidePanel type={"Standard"} />
        </div>
      );
    case "Causes":
      return (
        <div {...props}>
          <MainPageContent
            pageTitle={"Página de Causas "}
            profileType={profileType}
            pageFilter={"CauseOnly"}
          />
          <SidePanel type={"CauseOnly"} />
        </div>
      );
    case "Posts":
      return (
        <div {...props}>
          <MainPageContent
            pageTitle={"Página de Publicaciones"}
            profileType={profileType}
            pageFilter={"PostOnly"}
          />
          <SidePanel type={"PostOnly"} />
        </div>
      );
    case "Profile":
      return (
        <div {...props}>
          <MainPageContent
            pageTitle={"My Profile"}
            profileType={profileType}
            pageFilter={"Profile"}
          />
          <SidePanelProfile />
        </div>
      );
    default:
      return (
        <div {...props}>
          <MainPageContent pageTitle={"Home Feed"} profileType={profileType} />
          <SidePanel type={"Standard"} />
        </div>
      );
  }
};

const PageContent = styled(PageContentWrapper)`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

PageContent.propTypes = {
  profileType: PropTypes.bool.isRequired
};

export default PageContent;
