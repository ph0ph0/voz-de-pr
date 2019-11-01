import React, { useState } from 'react'
import styled from 'styled-components'

// import PRFlag from '../../../assets/SidePanel/FuckingFlag.png'
import { ReactComponent as PRFlag } from '../../../assets/SidePanel/PRFlag.svg' 
import Logo from '../../Primitive/SidePanel/Logo'
import SidePanelProfileBody from './SidePanel_Profile_Body'
import ActionButton from '../../Primitive/General/ActionButton'

import useApi from '../../../CustomHooks/useAPI'
import SidePanelProfileAPI from './API/SidePanelProfileAPI'

const SidePanelWrapper = props => {

  const api = useApi(SidePanelProfileAPI, {
    name: "",
    locationValue: "",
    selectedLocation: "",
    listOpen: false,
    selectedAvatar: null
  })

  const submitProfileChange = () => {
    let newName = api.name;
    let newLocation = api.selectedLocation;
    let newAvatar = api.selectedAvatar;

    console.log(
      `submitted name ${newName}, location ${newLocation}, avatar ${newAvatar}`
    );

    api.resetAll();
    
  };

  return (
    <div {...props}>
      <PRFlag />
      <Logo />
      <SidePanelProfileBody
        api = {api}
      />
      <ActionButton secondary onClick={() => api.submit()}>
        Change
      </ActionButton>
    </div>
  );
};

const SidePanel_Profile = styled(SidePanelWrapper)`
    /* border: 1px solid black; */
    width: 300px;
    height: auto;
    background-color: #fff;

    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);

    padding-bottom: 20px;
    margin-top: 100px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
`;

export default SidePanel_Profile