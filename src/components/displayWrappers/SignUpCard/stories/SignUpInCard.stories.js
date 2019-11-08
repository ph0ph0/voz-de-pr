import React from 'react'
import { storiesOf } from '@storybook/react'

import SignUpInCard from '../SignUpInCard'

storiesOf('DisplayWrappers|SignUpInCard/SignUpInCard', module)
    .add('Standard', () => <SignUpInCard />)