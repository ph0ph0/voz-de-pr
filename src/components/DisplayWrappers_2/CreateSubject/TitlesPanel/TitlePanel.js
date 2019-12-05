import React from "react";
import styled from "styled-components";

import StateTitle from "../../../Primitive/CreateSubject/TitlesPanel/StateTitle";
import { EditSVG, ImageSVG, LinkSVG } from "../../../Primitive/CreateSubject/TitlesPanel/StateTitleSVGs";

const TitlePanelWrapper = ({
  api,
  type,
  secondary,
  title,
  ...props
}) => {
  function renderSwitch(type) {
    switch (type) {
    case "content":
      return (
        <EditSVG
          api = {api}
          type={type}
          secondary={secondary}
        />
      );
    case "image":
      return (
        <ImageSVG
          api = {api}
          type={type}
          secondary={secondary}
        />
      );
    case "link":
      return (
        <LinkSVG
          api = {api}
          type={type}
          secondary={secondary}
        />
      );
    default:
      return <EditSVG />;
    }
  }
  return (
    <div {...props} onClick = {() => api.showPanel(type)}>
      {renderSwitch(type)}
      <StateTitle type={type} secondary={secondary} api = {api}>
        {title}
      </StateTitle>
    </div>
  );
};

const TitlePanel = styled(TitlePanelWrapper)`
    /* border: 1px solid green; */
    /* background-color: red; */
    width: 249px;
    height: 97px;
    border-right: ${props =>
    props.type === "image" ? "1px solid #D8D8D8" : "none"};
    border-left: ${props =>
    props.type === "image" ? "1px solid #D8D8D8" : "none"};
    border-bottom: ${props =>
    props.type === props.api.currentPanel && props.secondary
      ? "2px solid #1B4EA0"
      : props.type === props.api.currentPanel
        ? "2px solid #EC220D"
        : "1px solid #D8D8D8"};

    /* border-radius: 5px; */

    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      cursor: pointer
    }
`;

export default TitlePanel;