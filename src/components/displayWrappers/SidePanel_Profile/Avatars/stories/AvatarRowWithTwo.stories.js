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

  import { mockApi } from '../../API/__mocks__/mockApi'

storiesOf("DisplayWrappers/SidePanel_Profile/Avatars/AvatarRowWithTwo", module)
    .add("Standard", () => <AvatarRowWithTwo avatars={RowOfThree_One} api = {mockApi}/>, {
        notes: "*PROPS; avatars, onClickAv, selectedAvatar* This is the wrapper for the avatars in the SidePanel_Profile"
    })