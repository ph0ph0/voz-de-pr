import React from 'react'
import { storiesOf } from '@storybook/react'

import ImageDescription from '../ImageDescription'

storiesOf("Primitive|text/ImageDescription", module)
    .add("Standard", () => <ImageDescription />)