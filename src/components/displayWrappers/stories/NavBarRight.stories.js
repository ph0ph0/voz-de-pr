import React from 'react'
import { storiesOf } from '@storybook/react'

import NavBarRight from '../NavBarRight'

storiesOf("DisplayWrappers|NavBar/NavBarRight", module)
    .add("Standard", () => <NavBarRight />)