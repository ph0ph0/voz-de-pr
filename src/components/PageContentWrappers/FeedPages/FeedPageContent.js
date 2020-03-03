//This component encapsulates everything that is displayed below the nav bar ie the main page content and the sidebar

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import MainPageContent from "./FeedMainPageContent";
import SidePanel from "components/DisplayWrappers/SidePanel/SidePanel";
import SidePanelProfile from "components/DisplayWrappers/SidePanel_Profile/SidePanel_Profile";
import { useLanguage } from "CustomHooks/useLanguage";

const displayText = {
  en: {
    home: "Home Feed",
    causes: "Cause Lobby",
    posts: "Post Lobby",
    profile: "My Profile"
  },
  sp: {
    home: "Causas y Publicaciones",
    causes: "Página de Causas",
    posts: "Página de Publicaciones",
    profile: "Mi Perfil"
  }
};

const PageContentWrapper = ({ pageType, profileType, ...props }) => {
  const { language } = useLanguage();

  switch (pageType) {
    case "Home":
      return (
        <div {...props}>
          <MainPageContent
            pageTitle={
              language === "spanish" ? displayText.sp.home : displayText.en.home
            }
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
            pageTitle={
              language === "spanish"
                ? displayText.sp.causes
                : displayText.en.causes
            }
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
            pageTitle={
              language === "spanish"
                ? displayText.sp.posts
                : displayText.en.posts
            }
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
            pageTitle={
              language === "spanish"
                ? displayText.sp.profile
                : displayText.en.profile
            }
            profileType={profileType}
            pageFilter={"Profile"}
          />
          <SidePanelProfile />
        </div>
      );
    default:
      return (
        <div {...props}>
          <MainPageContent
            pageTitle={
              language === "spanish" ? displayText.sp.home : displayText.en.home
            }
            profileType={profileType}
          />
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
