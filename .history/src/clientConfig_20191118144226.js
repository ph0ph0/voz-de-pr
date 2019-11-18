import awsMobile from "./aws-exports";

import Amplify, { Auth } from "aws-amplify";

import { createHttpLink } from "apollo-link-http";
import { createAppSyncLink } from "aws-appsync";

const httpLink = createHttpLink({
  uri: awsMobile.aws_appsync_graphqlEndpoint
});

const authConfig = {
  type: awsMobile.aws_appsync_authenticationType,
  credentials: async () => Auth.currentCredentials()
};

const awsLink = createAppSyncLink({
  url: awsMobile.aws_appsync_graphqlEndpoint,
  region: awsMobile.aws_appsync_region,
  auth: authConfig
});

//NEED TO CONFIGURE AUTH!!!
