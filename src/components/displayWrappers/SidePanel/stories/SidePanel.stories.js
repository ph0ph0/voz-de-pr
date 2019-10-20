import React from 'react'
import { storiesOf } from '@storybook/react'

import SidePanel from '../SidePanel'

storiesOf("DisplayWrappers|SidePanel/SidePanel", module)
    .add("Standard", () => <SidePanel />)