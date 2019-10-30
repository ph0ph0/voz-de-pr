import React from 'react'
import styled from 'styled-components'

import TitlePanel from './TitlePanel'

const TitlesPanelWrapper = ({ secondary, currentState, ...props }) => {
    return (
      <div {...props}>
        <TitlePanel
          secondary={secondary}
          type={"content"}
          title={secondary ? "Post" : "Cause"}
          currentState={currentState}
        />
        <TitlePanel
          secondary={secondary}
          type={"image"}
          title={"Image"}
          currentState={currentState}
        />
        <TitlePanel
          secondary={secondary}
          type={"link"}
          title={"Link"}
          currentState={currentState}
        />
      </div>
    );
  };

const TitlePanels = styled(TitlesPanelWrapper)`
    display: flex;
`

export default TitlePanels