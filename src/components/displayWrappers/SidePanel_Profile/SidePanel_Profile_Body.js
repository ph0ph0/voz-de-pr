import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Info from '../../Primitive/SidePanel/Info'
import Name from '../../Primitive/SidePanel_Profile/NameInput'
import DropDown from './DropDown/DropDown'
import AvatarInstruction from '../../Primitive/SidePanel_Profile/Avatars/AvatarInstruction'
import Avatars from './Avatars/Avatars'

//Need to modify the Info component a bit for the SP_P
const ProfileHeader = styled(Info)`
  /* border: 1px solid black; */
  width: auto;

  text-align: center;
  font-size: 18px;

`

const SidePanelProfileBodyWrapper = ({
    nameValue,
    onChangeNameValue,
    toggleList,
    onClickAv,
    listOpen,
    selectedAvatar,
    onChangeLocationValue,
    locationValue,
    onLocationSelected,
    resetDropDown,
    ...props
  }) => {
    return (
      <div {...props}>
        <ProfileHeader>Change Details</ProfileHeader>
        <Name nameValue={nameValue} onChangeNameValue={onChangeNameValue} />
        <DropDown
          listOpen={listOpen}
          toggleList={toggleList}
          onChangeLocationValue={onChangeLocationValue}
          locationValue={locationValue}
          onLocationSelected={onLocationSelected}
          resetDropDown={resetDropDown}
        />
        <AvatarInstruction listOpen={listOpen}>
          Select A New Avatar
        </AvatarInstruction>
        <Avatars selectedAvatar={selectedAvatar} onClickAv={onClickAv} />
      </div>
    );
  };
  
const SidePanelProfileBody = styled(SidePanelProfileBodyWrapper)`
    /* border: 1px solid green; */
    width: auto;
    height: auto;

    display: flex;
    flex-direction: column;
`;

SidePanelProfileBody.propTypes = {
    nameValue: PropTypes.string.isRequired,
    onChangeNameValue: PropTypes.func.isRequired,
    toggleList: PropTypes.func.isRequired,
    onClickAv: PropTypes.func.isRequired,
    listOpen: PropTypes.bool.isRequired,
    selectedAvatar: PropTypes.number,
    onChangeLocationValue: PropTypes.func.isRequired,
    locationValue: PropTypes.string.isRequired,
    onLocationSelected: PropTypes.func.isRequired,
    resetDropDown: PropTypes.func.isRequired
}



export default SidePanelProfileBody