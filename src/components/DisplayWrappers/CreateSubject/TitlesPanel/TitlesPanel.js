import React from "react";
import styled from "styled-components";

import TitlePanel from "./TitlePanel";
import { useLanguage } from "CustomHooks/useLanguage";

const displayText = {
  en: {
    cause: "Cause",
    post: "Post",
    image: "Image",
    link: "Link"
  },
  sp: {
    cause: "Causa",
    post: "Publicación",
    image: "Imagen",
    link: "Enlace"
  }
};

const TitlesPanelWrapper = ({
  api,
  secondary,
  currentState,
  onClickTitlePanel,
  ...props
}) => {
  const { language } = useLanguage();

  return (
    <div {...props}>
      <TitlePanel
        secondary={secondary}
        type={"content"}
        title={
          secondary
            ? language === "spanish"
              ? displayText.sp.post
              : displayText.en.post
            : language === "spanish"
            ? displayText.sp.cause
            : displayText.en.cause
        }
        api={api}
      />
      <TitlePanel
        secondary={secondary}
        type={"image"}
        title={
          language === "spanish" ? displayText.sp.image : displayText.en.image
        }
        api={api}
      />
      <TitlePanel
        secondary={secondary}
        type={"link"}
        title={
          language === "spanish" ? displayText.sp.link : displayText.en.link
        }
        api={api}
      />
    </div>
  );
};

const TitlePanels = styled(TitlesPanelWrapper)`
  display: flex;
`;

export default TitlePanels;
