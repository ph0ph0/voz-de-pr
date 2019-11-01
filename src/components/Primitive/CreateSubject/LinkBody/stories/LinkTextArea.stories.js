import React from 'react'
import { storiesOf } from '@storybook/react'

import LinkTextArea from '../LinkTextArea'

const mockApi = {
    linkContent: "Test",
    updateLinkContent: () => {}
}

storiesOf('Primitive|text/LinkTextArea', module)
    .add('Cause', () => <LinkTextArea api = {mockApi}/>)
    .add('Post', () => <LinkTextArea secondary api = {mockApi}/>)