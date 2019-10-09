import React from 'react'
import { storiesOf } from '@storybook/react'

import LogoNavBar from '../LogoNavBar'

storiesOf("Primitive|Images/Logo", module)
    .add("Standard", () => <LogoNavBar />)