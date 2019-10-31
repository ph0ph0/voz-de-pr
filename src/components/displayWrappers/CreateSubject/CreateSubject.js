//This is the Card which the CreateSubject component wraps around in order to provide it with state

import React, { useState } from 'react'
import styled from 'styled-components'

import ContentBody from './ContentBody/ContentBody'
import ImageBody from './ImageBody/ImageBody'
import LinkBody from './LinkBody/LinkBody'
import TitlesPanel from './TitlesPanel/TitlesPanel'

const CreateSubjectWrapper = ({ secondary, ...props }) => {

  const [currentState, setCurrentState] = useState("content")

  const onClickTitlePanel = (type) => {
    setCurrentState(type)
    window.log(`new currentState: ${currentState}`)
  }

  function renderSwitch() {
    switch (currentState) {
      case "content":
        return <ContentBody secondary={secondary} />;
      case "image":
        return <ImageBody secondary={secondary} />;
      case "link":
        return <LinkBody secondary={secondary} />;
      default:
        return <ContentBody secondary={secondary} />;
    }
  }

  return (
    <div {...props}>
      <TitlesPanel secondary={secondary} currentState={currentState} onClickTitlePanel = {onClickTitlePanel}/>
      {renderSwitch(currentState)}
    </div>
  );
  };

const CreateSubject = styled(CreateSubjectWrapper)`
    /* border: 1px solid black; */
    width: 750px;
    height: auto;

    padding-bottom: 30px;

    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);

    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
`

export default CreateSubject