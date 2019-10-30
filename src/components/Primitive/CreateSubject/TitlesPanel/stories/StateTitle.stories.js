import React from 'react'
import { storiesOf } from '@storybook/react'

import StateTitle from '../StateTitle'

storiesOf('Primitive|text/TitlesPanel', module)
    .add('Cause', () => <StateTitle>Edit</StateTitle>)
    .add('Post', () => <StateTitle secondary>Edit</StateTitle>)