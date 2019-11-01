import React from 'react'
import { storiesOf } from '@storybook/react'

import ImageBody from '../ImageBody'

const mockApi = {
    imageDescription: "Test",
    updateImageDescription: () => {}
}

storiesOf('DisplayWrappers|CreateSubject/ImageBody/ImageBody', module)
    .add('Standard', () => <ImageBody api = {mockApi}/>)