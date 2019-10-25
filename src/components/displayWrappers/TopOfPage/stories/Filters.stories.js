import React from 'react'
import { storiesOf } from '@storybook/react'

import Filters from '../Filters'

storiesOf("DisplayWrappers|TopOfPage/Filters", module)
    .add("Standard", () => <Filters />)
    .add("ProfileType", () => <Filters profileType />)