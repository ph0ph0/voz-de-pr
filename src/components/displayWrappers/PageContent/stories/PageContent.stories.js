import React from 'react'
import { storiesOf } from '@storybook/react'

import PageContent from '../PageContent'

storiesOf("DisplayWrappers|PageContent/PageContent", module)
    .add("Standard", () => <PageContent />)