//This is the Card which the CreateSubject component wraps around in order to provide it with state

import React from 'react'
import styled from 'styled-components'

import ContentBody from './ContentBody/ContentBody'
import ImageBody from './ImageBody/ImageBody'
import LinkBody from './LinkBody/LinkBody'
import TitlesPanel from './TitlesPanel/TitlesPanel'

const CreateSubjectWrapper = ({ secondary, ...props }) => {

  const state = "image"

  function renderSwitch() {
    switch (state) {
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
      <TitlesPanel secondary={secondary} currentState={state} />
      {renderSwitch(state)}
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