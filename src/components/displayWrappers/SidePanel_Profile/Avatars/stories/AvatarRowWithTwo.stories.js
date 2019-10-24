import React from 'react'
import { storiesOf } from '@storybook/react'

import AvatarRowWithTwo from '../AvatarRowWithTwo'
import Person from '../../../../../assets/General/Person.png'

const AvatarsArray = [
    Person,
    Person,
    Person,
    Person,
    Person,
    Person,
    Person,
    Person,
    Person,
    Person
  ];

  const RowOfThree_One = {
    0: AvatarsArray[0],
    1: AvatarsArray[1]
  };

const onClickAv = () => {
    console.log("Clicked")
}

storiesOf("DisplayWrappers/SidePanel_Profile/Avatars/AvatarRowWithTwo", module)
    .add("Standard", () => <AvatarRowWithTwo avatars={RowOfThree_One} onClickAv={onClickAv} selectedAvatar={1} />, {
        notes: "*PROPS; avatars, onClickAv, selectedAvatar* This is the wrapper for the avatars in the SidePanel_Profile"
    })