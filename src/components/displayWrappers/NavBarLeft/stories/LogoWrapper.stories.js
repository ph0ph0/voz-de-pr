import React from 'react'
import { storiesOf } from '@storybook/react'

import LogoNavBar from '../../../primitive/LogoNavBar'

storiesOf("DisplayWrappers|NavBar/LogoWrapper", module)
    .add("Standard", () => <LogoNavBar />)