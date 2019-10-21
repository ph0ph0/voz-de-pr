import React from 'react'
import { storiesOf } from '@storybook/react'

import SidePanel from '../SidePanel'

storiesOf("DisplayWrappers|SidePanel/SidePanel", module)
    .add("Standard", () => <SidePanel />)
    .add("CauseOnly", () => <SidePanel type = {"CauseOnly"} />)
    .add("PostOnly", () => <SidePanel type = {"PostOnly"} />)
    .add("CauseInfo", () => <SidePanel type = {"CauseInfo"} />)
    .add("PostInfo", () => <SidePanel type = {"PostInfo"} />)