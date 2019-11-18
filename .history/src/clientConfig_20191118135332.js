import awsMobile from "./aws-exports";

import { createHttpLink } from "apollo-link-http";
import { createAppSyncLink } from "aws-appsync";

const httpLink = createHttpLink({
  uri: awsMobile.aws_appsync_graphqlEndpoint
});

const awsLink = createAppSyncLink({
  url: awsMobile.aws_appsync_graphqlEndpoint,
  region: awsMobile.aws_appsync_region
});
