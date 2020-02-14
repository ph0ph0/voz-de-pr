import React from "react";
import styled from "styled-components";

import ActionButton from "../General/ActionButton";
import { Link } from "react-router-dom";
import { useLanguage } from "CustomHooks/useLanguage";

const displayText = {
  en: {
    cause: "Create Cause",
    post: "Create Post"
  },
  sp: {
    cause: "Crear Causa",
    post: "Crear Publicación"
  }
};

const SidePanelActionButtonWrapper = ({ secondary, ...props }) => {
  const { language } = useLanguage();

  return (
    <Link {...props} to={secondary ? "/create-post" : "create-cause"}>
      <ActionButton {...props} secondary={secondary}>
        {secondary
          ? language === "spanish"
            ? displayText.sp.post
            : displayText.en.post
          : language === "spanish"
          ? displayText.sp.cause
          : displayText.en.cause}
      </ActionButton>
    </Link>
  );
};

const SidePanelActionButton = styled(SidePanelActionButtonWrapper)`
  & + & {
    margin-top: 20px;
  }
`;

export default SidePanelActionButton;
