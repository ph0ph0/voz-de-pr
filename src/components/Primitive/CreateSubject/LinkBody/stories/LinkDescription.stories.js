import React from 'react'
import { storiesOf } from '@storybook/react'

import LinkDescription from '../LinkDescription'

const mockApi = {
    linkDescription: "Test",
    updateLinkDescription: () => {}
}

storiesOf('Primitive|text/LinkDescription', module)
    .add('Standard', () => <LinkDescription api = {mockApi}/>)