import React from 'react'
import { storiesOf } from '@storybook/react'

import TitlesPanel from '../TitlesPanel'

storiesOf('DisplayWrappers/CreateSubject/TitlesPanel/TitlesPanel', module)
    .add('Standard', () => <TitlesPanel />)