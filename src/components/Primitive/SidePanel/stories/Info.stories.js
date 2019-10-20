import React from 'react'
import { storiesOf } from '@storybook/react'

import Info from '../Info'

storiesOf("Primitive|text/Info", module)
    .add("Standard", () => <Info>Voz de Puerto Rico (Voz de PR) is a social platform that allows users to
    take an active role in the progression of human needs, social betterment
    and national development of Puerto Rico. It is community based, and
    provides a voice to those who wish to enact change across society.</Info>)