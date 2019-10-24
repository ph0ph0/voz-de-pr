import React, { useState } from 'react'
import styled from 'styled-components'

// import PRFlag from '../../../assets/SidePanel/FuckingFlag.png'
import { ReactComponent as PRFlag } from '../../../assets/SidePanel/PRFlag.svg' 
import Logo from '../../Primitive/SidePanel/Logo'
import SidePanelProfileBody from './SidePanel_Profile_Body'
import ActionButton from '../../Primitive/General/ActionButton'


const SidePanelWrapper = props => {
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const [listOpen, setListOpen] = useState(false);
    const [nameValue, setNameValue] = useState("");
    const [locationValue, setLocationValue] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");
  
    const onChangeNameValue = event => {
      console.log(`Name Input Value: ${event.target.value}`);
      setNameValue(event.target.value);
    };
  
    function onClickAv(key) {
      const selectedKey = key;
      setSelectedAvatar(selectedKey);
      console.log(`Avatar clicked, key: ${key}`);
    }
  
    function toggleList() {
      setListOpen(prevState => {
        const newState = !prevState;
        return newState;
      });
      console.log(
        `toggleList, locationValue: ${locationValue}, selectedLocation: ${selectedLocation}, listOpen: ${listOpen}`
      );
    }
  
    const onChangeLocationValue = event => {
      console.log(`Location Input Value: ${event.target.value}`);
      setLocationValue(event.target.value);
    };
  
    const onLocationSelected = location => {
      console.log(`Location Selected: ${location}`);
      //When the user taps a location, set it as the location
      setSelectedLocation(location);
      //Set the selected location to the value of the input
      setLocationValue(location);
      //close the list
      setListOpen(false);
  
      console.log(
        `onLocationSelected, locationValue: ${locationValue}, selectedLocation: ${selectedLocation}, listOpen: ${listOpen}`
      );
    };
  
    const resetDropDown = () => {
      setLocationValue("");
      setSelectedLocation(null);
      console.log(
        `resetDropDown, locationValue: ${locationValue}, selectedLocation: ${selectedLocation}`
      );
    };
  
    const submitProfileChange = () => {
      let newName = nameValue;
      let newLocation = locationValue;
      let newAvatar = selectedAvatar;
  
      console.log(
        `submitted name ${newName}, location ${newLocation}, avatar ${newAvatar}`
      );
  
      resetDropDown();
      setNameValue("");
      setSelectedAvatar(null);
    };
  
    return (
      <div {...props}>
        <PRFlag />
        <Logo />
        <SidePanelProfileBody
          nameValue={nameValue}
          onChangeNameValue={onChangeNameValue}
          toggleList={toggleList}
          listOpen={listOpen}
          onChangeLocationValue={onChangeLocationValue}
          locationValue={locationValue}
          onLocationSelected={onLocationSelected}
          resetDropDown={resetDropDown}
          selectedAvatar={selectedAvatar}
          onClickAv={onClickAv}
        />
        <ActionButton secondary onClick={submitProfileChange}>
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

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
`;

export default SidePanel_Profile