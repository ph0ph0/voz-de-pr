import React from 'react'
import { storiesOf } from '@storybook/react'

import NavBarLeft from '../NavBarLeft'

storiesOf("DisplayWrappers|NavBar/NavBarLeft", module)
    .add("NavBarLeft", () => <NavBarLeft />)