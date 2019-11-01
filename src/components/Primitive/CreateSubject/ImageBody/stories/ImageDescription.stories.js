import React from 'react'
import { storiesOf } from '@storybook/react'

import ImageDescription from '../ImageDescription'

const mockApi = {
    imageDescription: "Test",
    updateImageDescription: () => {}
}

storiesOf("Primitive|text/ImageDescription", module)
    .add("Standard", () => <ImageDescription api = {mockApi}/>)