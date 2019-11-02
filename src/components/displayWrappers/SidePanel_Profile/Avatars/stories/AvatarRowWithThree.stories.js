import React from 'react'
import { storiesOf } from '@storybook/react'

import AvatarRowWithThree from '../AvatarRowWithThree'
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
    1: AvatarsArray[1],
    2: AvatarsArray[2]
  };

import { mockApi } from '../../API/__mocks__/mockApi'

storiesOf("DisplayWrappers/SidePanel_Profile/Avatars/AvatarRowWithThree", module)
    .add("Standard", () => <AvatarRowWithThree avatars={RowOfThree_One} api = {mockApi} />, {
        notes: "*PROPS; avatars, onClickAv, selectedAvatar* This is the wrapper for the avatars in the SidePanel_Profile"
    })