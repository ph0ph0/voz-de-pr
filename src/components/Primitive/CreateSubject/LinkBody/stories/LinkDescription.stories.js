import React from 'react'
import { storiesOf } from '@storybook/react'

import LinkDescription from '../LinkDescription'

storiesOf('Primitive|text/LinkDescription', module)
    .add('Standard', () => <LinkDescription />)