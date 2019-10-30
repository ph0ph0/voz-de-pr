import React from 'react'
import { storiesOf } from '@storybook/react'

import CreateSubject from '../CreateSubject'

storiesOf('DisplayWrappers|CreateSubject/CreateSubject', module)
    .add('Standard', () => <CreateSubject />)