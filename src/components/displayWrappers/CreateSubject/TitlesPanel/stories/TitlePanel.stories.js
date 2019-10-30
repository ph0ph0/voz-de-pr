import React from 'react'
import { storiesOf } from '@storybook/react'

import TitlePanel from '../TitlePanel'

storiesOf('DisplayWrappers|CreateSubject/TitlePanels/TitlePanel', module)
    .add('Standard', () => <TitlePanel title = {"Edit"} />)