import React from 'react'
import { storiesOf } from '@storybook/react'

import LinkBody from '../LinkBody'

const mockApi = {
    linkDescription: "Test",
    linkContent: "Test",
    updateLinkDescription: () => {},
    updateLinkContent: () => {}
}

storiesOf('DisplayWrappers|CreateSubject/LinkBody/LinkBody', module)
    .add('Cause', () => <LinkBody api = {mockApi}/>)
    .add('Post', () => <LinkBody secondary api = {mockApi}/>)