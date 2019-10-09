import React from 'react'
import { storiesOf } from '@storybook/react'

import SearchBar from '../SearchBar'

storiesOf("Primitive|Inputs/SearchBar", module)
    .add("Standard", () => <SearchBar placeholder ={"Search"}/>)
    .add("C&P", () => <SearchBar placeholder ={"Search Causes and Posts"}/>)
    .add("P", () => <SearchBar placeholder ={"Search Posts"}/>)
    .add("C", () => <SearchBar placeholder ={"Search Causes"}/>)