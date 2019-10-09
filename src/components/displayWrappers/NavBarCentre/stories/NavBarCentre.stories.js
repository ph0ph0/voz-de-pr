import React from 'react'
import { storiesOf } from '@storybook/react'

import NavBarCentre from '../NavBarCentre'

storiesOf("DisplayWrappers|NavBar/NavBarCentre", module)
    .add("Standard", () => <NavBarCentre placeholder = {"Search"}/>)
    .add("C&P", () => <NavBarCentre placeholder = {"Search Causes and Posts"}/>)
    .add("C", () => <NavBarCentre placeholder = {"Search Causes"}/>)
    .add("P", () => <NavBarCentre placeholder = {"Search Posts"}/>)