import React from 'react'
import { storiesOf } from '@storybook/react'

import VoteArrow from '../VoteArrow'

storiesOf('Primitive/Images/VoteArrow', module)
    .add('Standard', () => <VoteArrow />)
    .add('Standard_Down', () => <VoteArrow pointDown/>)
    .add('Small', () => <VoteArrow small/>)
    .add('Small_Down', () => <VoteArrow small pointDown/>)