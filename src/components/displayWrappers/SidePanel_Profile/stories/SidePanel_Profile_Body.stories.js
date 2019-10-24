import React from 'react'
import { storiesOf } from '@storybook/react'

import SidePanel_Profile_Body from '../SidePanel_Profile_Body'

const onChangeNameValue = () => {
    console.log("NameChanged")
}

const toggleList = () => {
    console.log("list toggled")
}

const onChangeLocationValue = () => {
    console.log("location changed")
}

const onLocationSelected = () => {
    console.log("location selected")
}

const resetDropDown = () => {
    console.log("dropdown reset")
}

const onClickAv = () => {
    console.log("av clicked")
}

storiesOf("DisplayWrappers|SidePanel_Profile/SidePanel_Profile_Body", module)
    .add("Standard", () => <SidePanel_Profile_Body
    nameValue={"Test"}
    onChangeNameValue={onChangeNameValue}
    toggleList={toggleList}
    listOpen={true}
    onChangeLocationValue={onChangeLocationValue}
    locationValue={"d"}
    onLocationSelected={onLocationSelected}
    resetDropDown={resetDropDown}
    selectedAvatar={1}
    onClickAv={onClickAv}
  />, {
      notes: "*PROPS nameValue, onChangeNameValue, toggleList, onClickAv, listOpen, selectedAvatar, onChangeLocationValue, locationValue, onLocationSelected, resetDropDown.* This looks messy as it needs to be in a container and can't act as a standalone component"
  })