import React from 'react'
import { storiesOf } from '@storybook/react'

import InlineContent from '../InlineContent'

storiesOf("DisplayWrappers|SidePanel_Profile/DropDown/InlineContent", module)
    .add("Standard", () => <InlineContent />)