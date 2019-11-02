import React from 'react'
import { storiesOf } from '@storybook/react'

import Person from '../../../../../assets/General/Person.png'
import Avatar from '../Avatar'

import { mockApi } from '../../../../DisplayWrappers/SidePanel_Profile/API/__mocks__/mockApi'

storiesOf("Primitive|Images/Avatar", module)
    .add("Standard", () => <Avatar src = {Person} tag = {"1"} selectedAvatar = {mockApi.selectedAvatar} api = {mockApi}/>)
    .add("Selected", () => <Avatar src = {Person} tag = {"1"} selectedAvatar = {mockApi.selectedAvatar} api = {mockApi}/>)