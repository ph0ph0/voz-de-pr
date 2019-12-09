import awsMobile from "./aws-exports";

import { createHttpLink } from "apollo-link-http";

const httpLink = createHttpLink({
  uri: awsMobile.aws_appsync_graphqlEndpoint
});
