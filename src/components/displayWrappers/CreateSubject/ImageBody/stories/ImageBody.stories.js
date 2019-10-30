import React from 'react'
import { storiesOf } from '@storybook/react'

import ImageBody from '../ImageBody'

storiesOf('DisplayWrappers|CreateSubject/ImageBody/ImageBody', module)
    .add('Standard', () => <ImageBody />)