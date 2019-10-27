import React from 'react'
import { storiesOf } from '@storybook/react'

import MainPage from '../MainFeed'

storiesOf("DisplayWrappers|Pages/MainFeed/MainFeed", module)
    .add("Standard", () => <MainPage />)