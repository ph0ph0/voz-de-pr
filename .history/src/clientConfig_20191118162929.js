import awsMobile from "./aws-exports";

import Amplify, { Auth } from "aws-amplify";

import { createHttpLink } from "apollo-link-http";
import { createAppSyncLink } from "aws-appsync";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = createHttpLink({
  uri: awsMobile.aws_appsync_graphqlEndpoint
});

const authConfig = {
  type: awsMobile.aws_appsync_authenticationType,
  credentials: () => Auth.currentCredentials()
};

const awsLink = createAppSyncLink({
  url: awsMobile.aws_appsync_graphqlEndpoint,
  region: awsMobile.aws_appsync_region,
  auth: authConfig,
  complexObjectsCredentials: () => Auth.currentCredentials()
});

export const clientConfig = new ApolloClient({
  link: awsLink.concat(httpLink),
  cache: new InMemoryCache()
});
