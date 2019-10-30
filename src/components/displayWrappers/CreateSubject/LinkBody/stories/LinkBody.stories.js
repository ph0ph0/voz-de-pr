import React from 'react'
import { storiesOf } from '@storybook/react'

import LinkBody from '../LinkBody'

storiesOf('DisplayWrappers|CreateSubject/LinkBody/LinkBody', module)
    .add('Cause', () => <LinkBody />)
    .add('Post', () => <LinkBody secondary />)