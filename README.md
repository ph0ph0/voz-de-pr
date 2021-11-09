[![PR Flag](./src/assets/SidePanel/PRFlag.svg)]

## Overview

This project was created in collaboration with a charity based in Puerto Rico, with the aim of circumventing political blocks to the fair dissemination of public funds. The aim was to create a 'Reddit-like' application, which would allow users to list their own social causes that need financial backing. Users should be able to upvote causes, as well as comment on them. The next phase in development was to integrate a crowd-funding functionality, but due to unforseen circumstances, funding for the project was exhausted and it remains as a platform for users to share their stories.

The application was created using ReactJS, and AWS Amplify. Through Amplify, there were a number of AWS services that were used, such as DynomoDB, Lambda, S3 and IAM. GraphQL was used as the query language, and given the complex functionality of user comments and voting, custom resolvers were required. By visiting the [gql schema](https://github.com/ph0ph0/voz-de-pr/blob/master/src/graphql/schema.json), one can get an insight into the complexity of the project and the reasoning behind using the custom resolvers. 

[Storybook.js](https://storybook.js.org/) was used to create a component library and to facilitate snapshot testing, and [styled-components](https://styled-components.com/) was used as the CSS-in-JS library.

https://www.vozdepuertorico.com/
