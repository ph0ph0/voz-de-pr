import React from 'react'
import { storiesOf } from '@storybook/react'

import Person from '../../../../../assets/General/Person.png'
import Avatar from '../Avatar'

storiesOf("Primitive|Images/Avatar", module)
    .add("Standard", () => <Avatar src = {Person} tag = {"1"} selectedAvatar = {0} />)
    .add("Selected", () => <Avatar src = {Person} tag = {"1"} selectedAvatar = {1} />)