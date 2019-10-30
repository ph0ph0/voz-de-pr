import React from 'react'
import { storiesOf } from '@storybook/react'

import LinkTextArea from '../LinkTextArea'

storiesOf('Primitive|text/LinkTextArea', module)
    .add('Cause', () => <LinkTextArea />)
    .add('Post', () => <LinkTextArea secondary/>)