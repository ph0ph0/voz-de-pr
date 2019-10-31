import React from 'react'
import styled from 'styled-components'

import TitlePanel from './TitlePanel'

const TitlesPanelWrapper = ({ secondary, currentState, onClickTitlePanel, ...props }) => {
    return (
      <div {...props}>
        <TitlePanel
          secondary={secondary}
          type={"content"}
          title={secondary ? "Post" : "Cause"}
          currentState={currentState}
          onClickTitlePanel = {onClickTitlePanel}
        />
        <TitlePanel
          secondary={secondary}
          type={"image"}
          title={"Image"}
          currentState={currentState}
          onClickTitlePanel = {onClickTitlePanel}
        />
        <TitlePanel
          secondary={secondary}
          type={"link"}
          title={"Link"}
          currentState={currentState}
          onClickTitlePanel = {onClickTitlePanel}
        />
      </div>
    );
  };

const TitlePanels = styled(TitlesPanelWrapper)`
    display: flex;
`

export default TitlePanels