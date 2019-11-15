import React from "react";
import styled from "styled-components";

import TitlePanel from "./TitlePanel";

const TitlesPanelWrapper = ({ api, secondary, currentState, onClickTitlePanel, ...props }) => {
  return (
    <div {...props}>
      <TitlePanel
        secondary={secondary}
        type={"content"}
        title={secondary ? "Post" : "Cause"}
        api = {api}
      />
      <TitlePanel
        secondary={secondary}
        type={"image"}
        title={"Image"}
        api = {api}
      />
      <TitlePanel
        secondary={secondary}
        type={"link"}
        title={"Link"}
        api = {api}
      />
    </div>
  );
};

const TitlePanels = styled(TitlesPanelWrapper)`
    display: flex;
`;

export default TitlePanels;