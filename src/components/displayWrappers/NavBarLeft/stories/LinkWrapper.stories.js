import React from 'react'
import { storiesOf } from '@storybook/react'

import LinkWrapper from '../LinkWrapper'

storiesOf("DisplayWrappers|NavBar/LinkWrapper", module)
    .add("LinkNavBar", () => <LinkWrapper />)