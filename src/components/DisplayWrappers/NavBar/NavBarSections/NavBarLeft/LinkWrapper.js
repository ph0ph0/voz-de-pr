import React from "react";
import styled from "styled-components";

import LinkNavBar from "components/Primitive/NavBar/LinkNavBar";
import { useLanguage } from "CustomHooks/useLanguage";

const displayText = {
  en: {
    home: "HOME",
    causes: "CAUSES",
    posts: "POSTS",
    profile: "PROFILE"
  },
  sp: {
    home: "INICIO",
    causes: "CAUSAS",
    posts: "PUBLICACIONES",
    profile: "PERFIL"
  }
};

const Wrapper = props => {
  const { language } = useLanguage();

  return (
    <nav {...props}>
      <LinkNavBar to={"/"} {...props}>
        {language == "spanish" ? displayText.sp.home : displayText.en.home}
      </LinkNavBar>
      <LinkNavBar to={"/causes"} {...props}>
        {language == "spanish" ? displayText.sp.causes : displayText.en.causes}
      </LinkNavBar>
      <LinkNavBar to={"/posts"} {...props}>
        {language == "spanish" ? displayText.sp.posts : displayText.en.posts}
      </LinkNavBar>
      <LinkNavBar to={"/profile"} {...props}>
        {language == "spanish"
          ? displayText.sp.profile
          : displayText.en.profile}
      </LinkNavBar>
    </nav>
  );
};

const LinkWrapper = styled(Wrapper)`
  /* border: 1px solid purple; */
  flex: 0;
  height: 100%;
  width: 80%;
  margin-right: 10px;

  display: flex;
`;

export default LinkWrapper;
