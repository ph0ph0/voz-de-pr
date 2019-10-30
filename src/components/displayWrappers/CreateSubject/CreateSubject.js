//This provides state to the CreateSubjectCard component

import React from 'react'

import CreateSubjectCard from './CreateSubjectCard'

const CreateSubject = ({ ...props }) => {
    const state = "content";
    const secondary = false;
  
    return (
      <div {...props}>
        <CreateSubjectCard state={state} secondary={secondary} />
      </div>
    );
  };

export default CreateSubject